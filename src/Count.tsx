import { useState, type JSX } from "react";

interface ButttonProps {
    label: string,
    onClick:() =>void;
}

function Button({label, onClick}:ButttonProps):JSX.Element{
    return <button onClick={onClick}>{label}</button>
}

function Display({count}:{count:number}):JSX.Element{
    return <p>{count}</p>
}

export default function App():JSX.Element{
    const[count, setCount] =useState<number>(0);

const handleIncrement=()=>{
    setCount(prev =>prev+1);
};

const handleDecrement=()=>{
    setCount(prev=>prev -1);
};
    
    return(
        <div>
            <Display count={count}/>
            <Button  label="Increase" onClick={handleIncrement} />
            <Button label="Decrease" onClick={handleDecrement}/>

        </div>
    );
}