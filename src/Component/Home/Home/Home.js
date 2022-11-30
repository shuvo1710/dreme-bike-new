import React from 'react';
import CarouselApp from '../../Carousel/CarouselApp'
import Advertisement from '../Advertisement/Advertisement';
import Allproduct from '../Allproduct/Allproduct';


const Home = () => {
    return (
        <div>
            <div className=''>
            <CarouselApp></CarouselApp>     
            </div> 
            <div className=' mt-10'>
            <Allproduct></Allproduct>    
            </div>  

            <div>
            <Advertisement></Advertisement>    
            </div>   
        </div>
    );
};

export default Home;