import { useState, type JSX } from "react"

export default function LoginForm1(): JSX.Element {

    const[email, setEmail]=useState<string>("");
    const[password, setPassword] =useState<string>("");
    const[isSubmitted, setIsSubmitted] =useState<boolean>(false);

    const emailError = email === "" ? "Email can not be empty": "";

    const passwordError =password.length> 0 && password.length < 6 ? "Password must be at least 6 character" :"";

    const isFormValid = email !== "" && password.length >= 6;

    const handleSubmit =()=>{
        setIsSubmitted(true);

        if(!isFormValid) return;

        console.log("Email:" ,email, "Password:", password);
        setEmail("");
        setPassword("");
        setIsSubmitted(false);
    }

    return(
        <div>
            <label>Email:</label>
            <input placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{setEmail(e.target.value)}}></input>

            {isSubmitted && emailError && (<div style={{color:"red"}}>{emailError}</div>
        )}

            <br></br>
            <label>Password</label>
            <input placeholder="Enter your password"
            value={password}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}}></input>
            <br></br>

            {isSubmitted && passwordError && (<div style={{color:"red"}}>{passwordError}</div>
        )}

            <button onClick={handleSubmit}
            disabled={!isFormValid}>Submit</button>
        </div>
    )
}

interface UserCardProps {
    name:string
    age:number
    isOnline?:boolean
}


function UserCards({
    name,
    age, 
    isOnline =false,
}: UserCardProps):JSX.Element{
    return <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Status: {isOnline ? "online🟢 ": "Offline🔴"}</p>
        </div>
}
