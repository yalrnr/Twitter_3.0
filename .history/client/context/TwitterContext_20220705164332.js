import { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({children}) => {
    const [appStatus,setAppStatus] = useState('loading')
    const [currentAccount,setCurrentAccount] = useState('')

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
                setAppStatus('notConnected')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const connectToWallet = async () => {
        if(!window.ethereum) return setAppStatus('noMetaMask')
        try {
            //
        } catch (error) {
            setAppStatus()
        }
    }

    return (
        <TwitterContext.Provider value={{}}>{children}</TwitterContext.Provider>
    )
}