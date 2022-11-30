import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext/UseContext';
import Loader from '../Share/Loader/Loader';

const MyOrder = () => {
    const {user} = useContext(AuthContext)
    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://dream-bike-server.vercel.app/BookingProduct?email=${user?.email}`,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('Token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-2xl font-bold my-2 text-center text-blue-500'>My Order: {myOrders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className=''>
                        <tr className='  text-black'>
                            <th>Serial</th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Meeting Address</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.length &&
                            myOrders?.map((order, i) =>

                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img alt='' src={order?.picture} />
                                            </div>
                                        </div>
                                    </th>
                                    <td >{order?.seller_name}</td>

                                    <td >{order?.meetingAddress}</td>
                                    <td >$ {order?.sell_price}</td>
                                    <td>
                                        {
                                            order?.sell_price
                                            && !order?.paid && <Link
                                                to={`/dashboard/payment/${order._id}`}
                                            >
                                                <button className='btn btn-primary btn-sm rounded-lg'>Pay</button>
                                            </Link>

                                        }
                                        {
                                            order?.sell_price
                                            && order?.paid && <span className='text-primary'>Paid</span>

                                        }
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

export default MyOrder;