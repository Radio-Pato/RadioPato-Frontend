import { createContext, useState } from "react";

export const AuthContext = createContext({})

interface Props {
    children:any
}

export function DataContextProvider(props:Props){
    const [auth, setAuth ]= useState(false);
    const valor = {auth, setAuth};

    return (
        <AuthContext.Provider value={valor}>
            {props.children}
        </AuthContext.Provider> 
    )
}