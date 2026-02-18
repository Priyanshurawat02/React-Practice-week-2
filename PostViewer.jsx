import { useState,useEffect } from "react"

export default function PostViewer() {

    const[posts, setPosts] =useState([]);
    const[selectedPost,setSelectedPost] =useState(null);
    const[comments,setComments] =useState([]);
    const[loading,setLoading] =useState(true);
    const[loadingComments, setLoadingComments] =useState(false);

    const URL= "https://jsonplaceholder.typicode.com/posts"
   
  
    useEffect(()=>{
        fetch(URL)
        .then(res =>res.json())
        .then(data=>{
            setPosts(data);
            setLoading(false);
        })
        .catch(err => setLoading(false))
    },[])

    useEffect(() =>{
        if(!selectedPost)
            return;

        setLoadingComments(true);
        
        const url= `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}/comments` 
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            setComments(data);
            setLoadingComments(false);

        })
        .catch(err => setLoadingComments(false))
    },[selectedPost])

    return (
        <div>
            <div>
               {posts.slice(0,10).map((post)=>(
                <div key={post.id} onClick={()=>setSelectedPost(post)}>
                    <p>{post.title}</p>
                </div> 
               ))}

            </div>
            <div>

            </div>
        </div>
    )
}