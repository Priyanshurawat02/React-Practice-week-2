import { useState, useEffect } from "react"

export default function TitleUpdater() {

    const[title, setTitle] =useState("");
    useEffect(() => {
        document.title =title; 
    }, [title]);
    

    return(
        <div>
            <input type="text"
            placeholder="Enter title"
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}></input>  
            <p>Current Title: {title}</p> 
        </div>
    )
}