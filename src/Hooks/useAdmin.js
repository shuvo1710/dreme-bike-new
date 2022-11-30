import { useEffect, useState } from "react"

const UseAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dream-bike-server.vercel.app/checkAdmin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setIsLoading(false)
            })
    }, [email])
    return [isAdmin, isLoading]
}

export default UseAdmin;