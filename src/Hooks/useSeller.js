import { useEffect, useState } from "react"

const UseSeller = email =>{
    const [isSeller, setIsSeller] = useState(false)
    const [loading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://dream-bike-server.vercel.app/checkSeller/${email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setIsSeller(data.isSeller)
            setIsLoading(false)
           
        })
    },[email])
    return [isSeller, loading]
}
 export default UseSeller