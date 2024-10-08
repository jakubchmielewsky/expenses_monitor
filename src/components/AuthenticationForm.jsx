import React from "react";
import InputGroup from "./InputGroup";

import { useAuthentication } from "../context/UserContext";

const AuthenticationForm = ({isVisible=true}) => {
    const{authenticationForm, setAuthenticationForm,hasAccount,setHasAccount} = useAuthentication();
    

    const handleInputChange = (e) => {
        const {name,value} =e.target;
        setAuthenticationForm({...authenticationForm, [name]:value});
    }

    return(
        <div className={`fixed w-full h-full backdrop-blur-sm flex items-center justify-center ${!isVisible&&"hidden"}`} style={{backgroundColor: "rgba(0,0,0,0.1)"}}>
            <form className="bg-white w-80 h-96 rounded-md px-10 py-8 flex flex-col gap-y-5">
                <h2 className="text-xl font-semibold">{hasAccount?"Login":"Sign up"}</h2>
                <InputGroup label="Email" type="email" name="email" value={authenticationForm.email} onChange={handleInputChange}/>
                <InputGroup label="Password" type="password" name="password" value={authenticationForm.password} onChange={handleInputChange}/>
                {!hasAccount && <InputGroup label="Confirm password" name="confirm" type="password" value={authenticationForm.confirm} onChange={handleInputChange}/>}
                <button type="submit" className="bg-indigo-500 h-12 text-white rounded-md w-full">{hasAccount?"Login":"Sign up"}</button>
                {hasAccount && <a href="#" className="underline cursor-pointer mx-auto">or sign up</a>}
                
            </form>
        </div>
    )
}

export default AuthenticationForm;