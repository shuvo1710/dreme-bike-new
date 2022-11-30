import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../Share/Loader/Loader';
import ReportProductCard from './ReportProductCard';


const ReportProduct = () => {

    const { data: ReportProduct = [], isLoading } = useQuery({
        queryKey: ['ReportProduct'],
        queryFn: async () => {
            const res = await fetch('https://dream-bike-server.vercel.app/ReportProduct')
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Loader></Loader>
    }

    console.log(ReportProduct)
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2  '>
            {
                ReportProduct?.map(reportData => <ReportProductCard
                    key={reportData._id}
                    reportData={reportData}
                ></ReportProductCard>)
            }
        </div>
    );
};

export default ReportProduct;