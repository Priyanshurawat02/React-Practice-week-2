import { useState ,useEffect} from "react"

export default function Counter() {
    const[count ,setCount] =useState(0);  
    const[message, setMessage] =useState("");

    useEffect(()=>{
        console.log("count changed:" ,count);
    },[count])
    
    const incrementHandle= () =>{
       if(count >=10){
        setMessage("Count can not go above 10!");
        return;
       }
       setMessage("")
       setCount(prev => prev+1);
    }

    const decrementHandle=() =>{
        if(count <=0){
            setMessage("Count can not go in minus!");
            return;
        }
        setMessage("");
        setCount(prev => prev-1);
    }

    const resetHandle=()=>{
        setCount(0);
        setMessage("");
    }

    return (
        <div>
            <p>{count}</p>
            {message && <p style={{color:"red"}}>{message}</p>}
            <button onClick={incrementHandle}> Increment</button>
            <button onClick={decrementHandle}> Decrement</button>
            <button onClick={resetHandle}> Reset </button>
        </div>
    )
}