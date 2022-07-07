import { createContext, useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { client } from '../lib/client'

export const TwitterContext = createContext()

export const TwitterProvider = ({children}) => {
    const [appStatus,setAppStatus] = useState('loading')
    const [currentAccount,setCurrentAccount] = useState('')

    const router = useRouter()

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])


    const checkIfWalletIsConnected = async () => {
        if(!window.ethereum) return setAppStatus('noMetaMask')

        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
            if(addressArray.length > 0) {
                //connected
                setAppStatus('connected')
                setCurrentAccount(addressArray[0])
            }
            else {
                //not connected 
                router.push('/')
                setAppStatus('notConnected')
            }
        } catch (error) {
            setAppStatus('error')
        }
    }

    const connectToWallet = async () => {
        if(!window.ethereum) return setAppStatus('noMetaMask')
        try {
            setAppStatus('loading')

            const addressArray = await window.ethereum.request({
                method:'eth_requestAccounts',
            })

            if(addressArray.length > 0) {
                setCurrentAccount(addressArray[0])
            } else {
                router.push('/')
                setAppStatus('notConnected')
            }
        } catch (error) {
            setAppStatus('error')
        }
    }

    const createUserAccount = async (userWalletAddress = currentAccount) => {
        if(!window.ethereum) return setAppStatus('noMetaMask')
        try {
            const userDoc = {
                _type: 'users',
                _id: userWalletAddress,
                name: 'Unnamed',
                isProfileImageNft: false,
                profileImage: 'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg',
                
            }
        } catch (error) {
            router.push('/')
            setAppStatus('error')
        }
    }

    return (
        <TwitterContext.Provider value={{appStatus, currentAccount, connectToWallet}}>
            {children}
        </TwitterContext.Provider>
    )
}