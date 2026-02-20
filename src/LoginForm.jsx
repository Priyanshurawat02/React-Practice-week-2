import { useState , useEffect} from "react"

export default function LoginForm() {

    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");
    const[isSubmitted, setIsSubmitted] =useState(false);

    const emailError = email ==="" ? "Email cannot be empty": "";
    const passwordError =
    password.length > 0 && password.length < 6 ? 
    "Password must be at least 6 characters":"";

    const isFormValid =email !== "" && password.length >=6;

    const handleSubmit=()=>{
        setIsSubmitted(true);

        if(!isFormValid)return;

        console.log("Email:",email,"Password:", password);
       
        setEmail("");
        setPassword("");
        setIsSubmitted(false);
    }

    return(
        <div>
            <label>Email: </label>
            <input placeholder="Enter your email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}></input>

            {isSubmitted && emailError && (
                <div style={{color:"red"}}>{emailError}</div>
            )}

         
            <br></br><br></br>

            <label>Password: </label>
            <input placeholder="Enter your password"
            value={password}
            type="password"
            onChange={(e) =>setPassword(e.target.value)}></input>

            {isSubmitted && passwordError && (
               <div style={{color:"red"}}>{passwordError} </div>)}

               <br></br>

            <button onClick={handleSubmit}
            disabled={!isFormValid}>Submit</button>

        </div>
    )
}