import { Typography } from "@mui/material";
import { GlobalContextProps, Autentecation } from "../types";
import { createContext, useContext, useState, useEffect } from 'react'


const Context = createContext<GlobalContextProps>(undefined as any)

export const GlobalContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    const [state, setState] = useState<Autentecation>({
        Email: undefined,
        Password: undefined,
        IsAutenticated: true
        
    })
    
    const handleFunction = () => {
        alert("hello world")
    }
    return (
        <Context.Provider
        value={{
            state,
            setState,
            handleFunction
        }}
        >{children}</Context.Provider>
    )
}

export const useGlobalContext = () => {
    if(!Context){
        throw new Error("Context must be used.")
    }
    return useContext(Context)
}