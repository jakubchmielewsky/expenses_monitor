import React,{useState} from "react";
import InputGroup from "./InputGroup";

const AuthenticationForm = () => {
    const [hasAccount,setHasAccount]=useState(true);

    return(
        <div className="fixed w-full h-full backdrop-blur-sm flex items-center justify-center" style={{backgroundColor: "rgba(0,0,0,0.1)"}}>
            <form className="bg-white w-80 h-96 rounded-md px-10 py-8 flex flex-col gap-y-5">
                <h2 className="text-xl font-semibold">{hasAccount?"Login":"Sign up"}</h2>
                <InputGroup label="Email" type="email" value={""} onChange={""}/>
                <InputGroup label="Password" type="password" value={""} onChange={""}/>
                {!hasAccount && <InputGroup label="Confirm password" type="password" value={""} onChange={""}/>}
                <button type="submit" className="bg-indigo-500 h-12 text-white rounded-md w-full">{hasAccount?"Login":"Sign up"}</button>
                {hasAccount && <a className="underline cursor-pointer mx-auto">or sign up</a>}
                
            </form>
        </div>
    )
}

export default AuthenticationForm;