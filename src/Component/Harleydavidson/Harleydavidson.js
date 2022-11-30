import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import BookingModal from '../Share/BookingModal';
import Loader from '../Share/Loader/Loader';
import ModalReport from '../Share/ModalReport';
import ProductCard from '../Share/ProductCard';


const Harleydavidson = () => {
    const [modalData, setModalData] = useState('')
    const [ReportModal, setReportModal] = useState('')
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['harleyBike'],
        queryFn: async () => {
            const res = await fetch('https://dream-bike-server.vercel.app/harleyBike')
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

export default Harleydavidson;