import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/UseContext/UseContext';
import Loader from '../Share/Loader/Loader';
import AdvertisementModal from './AdvertisementModal';
import MyProductsCard from './MyProductsCard/MyProductsCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [modalData, setModalData] = useState('')
    const { data: MyProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://dream-bike-server.vercel.app/myProducts?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    
    if (isLoading) {
        return <Loader></Loader>
    }

    const productDelete = product =>{
        const agree = window.confirm(`Are You Sure To Delete ${product.product_name} `)
        if(agree){
            fetch(`https://dream-bike-server.vercel.app/deleteProduct/${product._id}`,{
                method:'Delete',
            })
            .then(res=>res.json())
            .then(data=>{
                refetch()
                toast.success('SuccessFully Deleted Your Product')

            })
        }
    }
    return (
        <>
        <div>
            <h1 className=' text-3xl font-bold mt-4 text-blue-500 text-center'>My Products </h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                {
                    MyProducts[0]?.length > 0 &&
                    MyProducts[0]?.map((product, i) => <MyProductsCard
                        key={i}
                        product={product}
                        productDelete={productDelete}
                        setModalData={setModalData}
                    ></MyProductsCard>)
                }
                {
                    MyProducts[1]?.length > 0 &&
                    MyProducts[1]?.map((product, i) => <MyProductsCard
                        key={i}
                        product={product}
                        productDelete={productDelete}
                        setModalData={setModalData}
                    ></MyProductsCard>)
                }
                {
                    MyProducts[2]?.length > 0 &&
                    MyProducts[2]?.map((product, i) => <MyProductsCard
                        key={i}
                        product={product}
                        productDelete={productDelete}
                        setModalData={setModalData}
                    ></MyProductsCard>)
                }
                {
                    MyProducts[3]?.length > 0 &&
                    MyProducts[3]?.map((product, i) => <MyProductsCard
                        key={i}
                        product={product}
                        productDelete={productDelete}
                        setModalData={setModalData}
                    ></MyProductsCard>)
                }
                {
                    MyProducts[4]?.length > 0 &&
                    MyProducts[4]?.map((product, i) => <MyProductsCard
                        key={i}
                        product={product}
                        productDelete={productDelete}
                        setModalData={setModalData}
                    ></MyProductsCard>)
                }
                {
                    MyProducts[5]?.length > 0 &&
                    MyProducts[5]?.map((product, i) => <MyProductsCard
                        key={i}
                        product={product}
                        productDelete={productDelete}
                        setModalData={setModalData}
                    ></MyProductsCard>)
                }
            </div>

        </div>
        <AdvertisementModal
        modalData={modalData}></AdvertisementModal>
        </>
    );
};

export default MyProducts;