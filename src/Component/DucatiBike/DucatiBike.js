import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from '../Share/BookingModal';
import Loader from '../Share/Loader/Loader';
import ModalReport from '../Share/ModalReport';
import ProductCard from '../Share/ProductCard';


const DucatiBike = () => {

    const [modalData, setModalData] = useState('')
    const [ReportModal, setReportModal] = useState('')

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['Ducati'],
        queryFn: async () => {
            const res = await fetch('https://dream-bike-server.vercel.app/ducatiBike')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(bike => <ProductCard
                        key={bike._id}
                        bike={bike}
                        setModalData={setModalData}
                        setReportModal={setReportModal}
                    ></ProductCard>)
                }
            </div>
            <BookingModal
                modalData={modalData}
            ></BookingModal>


            <ModalReport
                ReportModal={ReportModal}
            ></ModalReport>

        </div>
    );
};

export default DucatiBike;