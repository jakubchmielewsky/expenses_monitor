import React,{createContext,useContext,useState} from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {
    const [hasAccount,setHasAccount]=useState(true);
    const [authenticationForm, setAuthenticationForm]=useState({email:"",password:"",confirm:""});

    return(
        <AuthenticationContext.Provider value={{hasAccount,setHasAccount,authenticationForm, setAuthenticationForm}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => useContext(AuthenticationContext);
