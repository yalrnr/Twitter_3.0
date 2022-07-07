import { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({children}) => {
    const checkIfWalletIsConnected = async () => {
        if(!window.ethereum) return
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <TwitterContext.Provider value={{}}>{children}</TwitterContext.Provider>
    )
}