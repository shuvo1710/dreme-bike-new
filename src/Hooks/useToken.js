import { useEffect, useState } from "react"

const UseToken = email =>{
    const [token,setToken]= useState('')
    useEffect(()=>{
        if(email){
            fetch(`https://dream-bike-server.vercel.app/jwt?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                if(data.token){
                    localStorage.setItem('Token', data.token)
                }
                console.log(data)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },[email])
    return [token]
}
export default UseToken