import { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({children}) => {
    const 
    return (
        <TwitterContext.Provider value={{}}>{children}</TwitterContext.Provider>
    )
}