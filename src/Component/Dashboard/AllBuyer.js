import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../Share/Loader/Loader';

const AllBuyer = () => {
    const { data: allBuyer = [], isLoading , refetch} = useQuery({
        queryKey: ['allBuyer'],
        queryFn: async () => {
            const res = await fetch('https://dream-bike-server.vercel.app/buyer')
            const data = await res.json();
            return data;
        }
        
    })

    console.log(allBuyer)
    if (isLoading) {
        return <Loader></Loader>
    }

    const handleBuyer = buyer =>{
        const agree = window.confirm(`Are You Sure To Delete ${buyer.name}`)
        if(agree){
            fetch(`https://dream-bike-server.vercel.app/buyer/${buyer._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                toast.success(`SuccessFully delete ${buyer.name}`)
                refetch()
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    return (
        <div>
            <h1 className='text-2xl text-blue-500 text-center font-bold my-4'>Total Buyer: {allBuyer.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className=''>
                        <tr className='  text-black'>
                            <th>Serial</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyer.map((buyer, i) =>
                            
                            <tr key={i}>
                            <th>{i + 1}</th>
                            <th>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img alt='' src={buyer?.photoURL} />
                                    </div>
                                </div>
                            </th>
                            <td >{buyer?.name}</td>
                            <td >{buyer?.email}</td>
                            <td>
                                <button onClick={()=>handleBuyer(buyer)} className='btn btn-sm rounded-lg bg-red-500 border-0 hover:bg-red-600 text-white'>Delete</button>
                            </td>

                        </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;