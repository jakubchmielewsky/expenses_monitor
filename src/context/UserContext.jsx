import React,{createContext,useContext,useState} from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [hasAccount,setHasAccount]=useState(true);
    const [authenticationForm, setAuthenticationForm]=useState({email:"",password:"",confirm:""});

    return(
        <UserContext.Provider value={{hasAccount,setHasAccount,authenticationForm, setAuthenticationForm}}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuthentication = () => useContext(UserContext);
