import React,{useState} from "react";
import InputGroup from "./InputGroup";

import { useAuthentication } from "../context/AuthenticationContext";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebaseConfig"; // konfiguracja firebase

const AuthenticationForm = ({isVisible=true}) => {
    const{authenticationForm, setAuthenticationForm,hasAccount,setHasAccount} = useAuthentication();

    const handleInputChange = (e) => {
        const {name,value} =e.target;
        setAuthenticationForm({...authenticationForm, [name]:value});
    }

    const [failed, setFailed] =useState(false);

    const toggleHasAccount = ()=>{setHasAccount(!hasAccount)};

    const login = async () =>{
        try{
            await signInWithEmailAndPassword(auth,authenticationForm.email,authenticationForm.password)
            setFailed(false);
        } catch(error){
            console.error(error);
            setFailed(true);
        }
    }

    const signUp = async () => {
        if(authenticationForm.password!==authenticationForm.confirm){
            setFailed(true);
        }
        try {
            await createUserWithEmailAndPassword(auth,authenticationForm.email,authenticationForm.password)
            setFailed(false);
        } catch (error) {
            console.error(error);
            setFailed(true);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if(hasAccount){
            login();
        }else{
            signUp();
        }

    }

    return(
        <div className={`fixed w-full h-full backdrop-blur-sm flex items-center justify-center ${!isVisible&&"hidden"}`} style={{backgroundColor: "rgba(0,0,0,0.1)"}}>
            <form style={{height:hasAccount?370:410}} className="bg-white w-80 rounded-md px-10 py-6 flex flex-col gap-y-5" onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold">{hasAccount?"Login":"Sign up"}</h2>
                <InputGroup label="Email" type="email" name="email" value={authenticationForm.email} onChange={handleInputChange}/>
                <InputGroup label="Password" type="password" name="password" value={authenticationForm.password} onChange={handleInputChange}/>
                {!hasAccount && <InputGroup label="Confirm password" name="confirm" type="password" value={authenticationForm.confirm} onChange={handleInputChange}/>}
                {failed && <p className="text-red-500 text-center">Operation failed</p>}
                <button type="submit" className="bg-indigo-500 h-12 text-white rounded-md w-full">{hasAccount?"Login":"Sign up"}</button>
                {hasAccount && <a href="#" className="underline cursor-pointer mx-auto" onClick={toggleHasAccount}>or sign up</a>}
                
            </form>
        </div>
    )
}

export default AuthenticationForm;