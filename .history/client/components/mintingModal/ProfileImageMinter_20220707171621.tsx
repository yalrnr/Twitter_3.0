
//// Decides which action is in progress while minting the image with its supportive function such as mint function

import { useState, useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { useRouter } from 'next/router'
import { client } from '../../lib/client'
import { contractABI, contractAddress } from '../../lib/constants'
import { ethers } from 'ethers'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
import { pinJSONToIPFS, pinFileToIPFS } from '../../lib/pinata'

declare let window: any

let metamask: any

if (typeof window !== 'undefined') {
  metamask = window.ethereum
}

/// Interface details
interface Metadata {
  name: string
  description: string
  image: string
}


// Smart Contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(metamask)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  )
  return transactionContract
}

//// Main function
const ProfileImageMinter = () => {
  const { currentAccount, setAppStatus } = useContext(TwitterContext)
  const router = useRouter()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('initial')
  const [profileImage, setProfileImage] = useState<File>()

  /// Mint function
  const mint = async () => {

    /// If any of name, description or profileimage is missing, dont go any further 
    if (!name || !description || !profileImage) return
    setStatus('loading')


    // in case of image, create a pinata metadata
    const pinataMetaData = {
      name: `${name} - ${description}`,
    }

    /// pin the file to IPFS using pinata function from '...lib->pinata'
    const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetaData)

    //// Await the sanity to set current image as profile and mark it as nft in the current account 
    await client
      .patch(currentAccount)
      .set({ profileImage: ipfsImageHash })
      .set({ isProfileImageNft: true })
      .commit()

      //// Image Metadata
    const imageMetaData: Metadata = {
      name: name,
      description: description,
      image: `ipfs://${ipfsImageHash}`,
    }

    /// pin the image metadata to the IPFS using function from '...lib->pinata'
    const ipfsJsonHash = await pinJSONToIPFS(imageMetaData)

    /// Await the response from the smart contract
    const contract = await getEthereumContract()

    /// Get the parameters for transaction
    const transactionParameters = {
      to: contractAddress,
      from: currentAccount,
      data: await contract.mint(currentAccount, `ipfs://${ipfsJsonHash}`),
    }

    try {
      // Start Transaction using the parameter
      await metamask.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      })
    /// set the status as 'finished' once done
      setStatus('finished')
    } catch (error: any) {
      console.log(error)
      setStatus('finished')
    }
  }

  //// main function for different status such as whether to 
  const fun = (modalStatus = status) => {
    switch (modalStatus) {
      case 'initial':
        return (
          <InitialState
            profileImage={profileImage!}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        )

      case 'loading':
        return <LoadingState />

      case 'finished':
        return <FinishedState />

      default:
        router.push('/')
        setAppStatus('error')
        break
    }
  }

  return <>{fun()}</>
}

export default ProfileImageMinter