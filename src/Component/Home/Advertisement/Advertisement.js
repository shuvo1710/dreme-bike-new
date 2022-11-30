import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Share/Loader/Loader';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {
    const {data: Advertisements = [], isLoading} = useQuery({
        queryKey:['AdvertisementProduct'],
        queryFn: async ()=>{
            const res =  await fetch('https://dream-bike-server.vercel.app/advertisementProduct')
            const data = await res.json()
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-blue-500'>advertisement Products</h1>
             <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    Advertisements.map(Advertise=><AdvertisementCard 
                        
                        key={Advertise._id}
                        Advertise={Advertise}
                        ></AdvertisementCard>)
                }
            </div>           
        </div>
    );
};

export default Advertisement;