import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../Share/Loader/Loader';

const AllSeller = () => {
    const { data: allSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['allSeller'],
        queryFn: async () => {
            const res = await fetch('https://dream-bike-server.vercel.app/seller')
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    const handleSellerDelete = seller =>{
        const agree = window.confirm(`Are You Sure to Delete ${seller.name}`)
        if(agree){
            fetch(`https://dream-bike-server.vercel.app/seller/${seller._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                toast.success(`SuccessFully delete ${seller.name}`)
                refetch()
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    const handleVerified= user=>{
        fetch(`https://dream-bike-server.vercel.app/verified/${user._id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            toast.success("Successfully verify Done")

        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1 className='text-2xl text-blue-500 text-center font-bold my-4'>Total Seller: {allSeller.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className='bg-white'>
                        <tr className=' text-black'>
                            <th>Serial</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allSeller.map((seller, i)=>
                            <tr key={i}>
                            <th>{i+1}</th>
                            <th>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img alt='' src={seller?.photoURL} />
                                    </div>
                                </div>
                            </th>
                            <td >{seller?.name}</td>
                            <td >{seller.email}</td>
                            <td>

                                {
                                    seller?.verification !=="verified" ? <button onClick={()=>handleVerified(seller)} className='btn btn-sm mx-2 border-0 text-gray-500 bg-yellow-300 hover:bg-yellow-500 rounded-lg'>Verify</button>  : <button  className='btn btn-sm mx-2 border-0 text-white bg-green-400 hover:bg-green-500 rounded-lg'>Verified</button> 
                                }
                                <button onClick={()=>handleSellerDelete(seller)} className='btn btn-sm bg-red-500 border-0 text-white hover:bg-red-600 rounded-lg'>Delete</button>
                            </td>
                            
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;