import { useState, useEffect,  } from "react"

export default function Timer() {

    const[second, setSeconds] =useState(0);
    const[isRunning, setIsRunning] =useState(false);
    

    useEffect(() =>{
        if(!isRunning) return;

        const interval =setInterval(()=>{
            setSeconds(prev => prev +1)
        }, 1000);

        return () => clearInterval(interval);
    },[isRunning]);

    const minutes =Math.floor(second / 60).toString().padStart(2,"0");
    const secs =(second % 60).toString().padStart(2, "0");

    return (
        <div>
            <h2>{minutes}:{secs}</h2>
            
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() =>setIsRunning(false)}>Stop</button>
            <button onClick={() =>{setSeconds(0); setIsRunning(false)}}>Reset</button>

        </div>
    )
}