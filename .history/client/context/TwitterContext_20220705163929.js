import { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({children}) => {
    const [appStatus,setAppStatus] = useState('loading')
    const [currentAccount,setCurrentAccount] = useState('')

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])


    const checkIfWalletIsConnected = async () => {
        if(!window.ethereum) return
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
            if(addressArray.length > 0) {
                //connected
                setAppStatus('connected')
                setCurrentAccount()
            }
            else {
                //not connected 
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <TwitterContext.Provider value={{}}>{children}</TwitterContext.Provider>
    )
}