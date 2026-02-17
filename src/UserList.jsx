import { useState,useEffect } from "react"

export default function UserList() {

    const [users, setUsers] =useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] =useState(null);

    const URL ="https://jsonplaceholder.typicode.com/users";

    useEffect(() =>{
        fetch(URL)
        .then (res => res.json())
        .then (data =>{
            setUsers(data)
            setLoading(false)
        })
        .catch(err=> {
            setError(err.message)
            setLoading(false)
        })
    },[])
    if (loading) return <p>Loading users...</p>
    if (error ) return <p>Error:{error}</p>

   
    return (
        <div>
            {users.map((user)=>{
                return (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>📧 {user.email}</p>
                    <p>📞 {user.phone}</p>
                    <p>🏢 {user.company.name}</p>
                    <p>🏙️ {user.address.city}</p>
                    </div>
                )
            })}  
        </div>
    )
}