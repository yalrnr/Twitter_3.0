import React from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { useState,useContext } from 'react'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
import { useRouter } from 'next/router'
import { pinJSONToIPFS, pinFileToIPFS} from '../../lib/pinata'
import { client } from '../../lib/client'

let metamask

if(typeof window)

const getEthereumContract = async () => {}

const ProfileImageMinter = () => {
    const { currentAccount, setAppStatus } = useContext(TwitterContext)
    const router = useRouter()

    const [status,setStatus] = useState('initial')
    const [name, setName] = useState('')
    const [profileImage, setProfileImage] = useState()
    const [description, setDescription] = useState('')

    const mint = async () => {
        if(!name || !description || !profileImage) return
        setStatus('loading')

        const pinataMetaData = {
            name:`${name} - ${description}`,
        }

        const ipfsImageHash = await pinFileToIPFS(profileImage,pinataMetaData)

        await client
        .patch(currentAccount)
        .set(profileImage:ipfsImageHash)
        .set({isProfileImageNft: true})
        .commit

        const imageMetaData = {
            name: name,
            description:description,
            image: `ipfs://${ipfsImageHash}`,
        }

        const ipfsJsonHash = await pinJSONToIPFS(imageMetaData,pinataMetaData)

        const contract = await getEthereumContract()
    }

    const modalChildren = (modalStatus = status) => {
        switch (modalStatus) {
            case 'initial':
              return (
                <InitialState
                  profileImage={profileImage}
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

  return <>{modalChildren(status)}</>
}

export default ProfileImageMinter