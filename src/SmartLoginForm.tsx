import { useState, useRef, useEffect, type JSX } from "react"

interface FormErrors {
    email?: string | undefined;
    password?:string | undefined;
}

export default function SmartLoginForm():JSX.Element {
    const[email, setEmail]= useState<string>("");
    const[password,setPassword]= useState<string>("");
    const[error, setError] =useState<FormErrors>({});


    const emailRef= useRef<HTMLInputElement | null>(null);
    const passwordRef =useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        emailRef.current?.focus();
    },[]);

    const validate =(): FormErrors=>{
        const newErrors: FormErrors ={};

        if(!email){
             newErrors.email ="Email is required"
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if(password.length <6){
            newErrors.password= "Password must be at least 6 characters";
        }
        return newErrors;
    }

    const handleSubmit=()=>{
      const validationErrors= validate();
      setError(validationErrors);
      
      if(validationErrors.email){
        emailRef.current?.focus();
        return;
      } 
       if(validationErrors.password){
        passwordRef.current?.focus();
         return ;
      }
        console.log("Form Submitted:", email, password);
    };

    return(
        <div>
            <label>Email:</label>
            <input
            type="email"
            value={email}
            ref={emailRef}
            onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
             if (value) {
             setError(prev => ({ ...prev, email: undefined }));
            }
            }}/>

            {error.email && (<p style={{color:"red"}}>{error.email}</p>)}
            
            <label>Password:</label>
            <input 
            ref={passwordRef}
            type="password"
            value={password}
            onChange={(e) =>{
                const value =e.target.value;
                setPassword(value);
                if(value.length >=6){
                    setError(prev => ({ ...prev,password:undefined}));
                }
            }}/>

            {error.password && (<p style={{color:"red"}}>{error.password}</p>)}
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}