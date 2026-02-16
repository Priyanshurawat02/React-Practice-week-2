import { useState, useEffect } from "react"

export default function WindowSize() {

    const[width, setWidth] =useState(0);
    const[height,setHeight] =useState(0);

    useEffect(()=>{
        const handlResize =() =>{
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        handlResize();
        window.addEventListener('resize',handlResize);

        return() => window.removeEventListener('resize',handlResize)
    },[])
    return (
         <div>
            <h3>Window Size Detector</h3>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
            {width < 768 ? "📱 Mobile" : width <1024 ? "📟 Tablet" :  "🖥️ Desktop"}
         </div>
    )
}