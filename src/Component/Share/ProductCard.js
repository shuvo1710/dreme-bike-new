import React from 'react';
import { FaCheck } from "react-icons/fa";
// import ReportModal from './ReportModal';

const ProductCard = ({ bike, setModalData, setReportModal}) => {
    const { purchase_Price, sell_price, picture, verification, age, time, seller_name, product_name, phone, address } = bike;
    // 


    
    return (
        <div className='p-4'>
            <div className="card  bg-white shadow-xl px-4 lg:px-0">
                <figure><img src={picture} className="h-full md:h-[250px] lg:h-[300px] lg:w-full" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-sm lg:text-2xl">
                        {product_name}

                    </h2>
                    <p>Use: {age} Month</p>
                    <p className='inline-block'>Seller: {seller_name} {verification === "verified" ? <span className='text-green-400'><FaCheck className='inline-block'></FaCheck></span> : <></>} </p>

                    <p >Purchase-Price:$ {purchase_Price}</p>
                    <p >Sell-Price:$ {sell_price}</p>
                    <p >Address: {address}</p>
                    <p >Phone: {phone}</p>
                    <p >Post: {time}</p>
                    <div className="card-actions justify-between">


                        <label onClick={()=>setReportModal(bike)}   htmlFor="report-modal"  className='btn bg-blue-500 hover:bg-blue-600 rounded-lg border-0 text-white'>Report</label>

                        <label onClick={() => setModalData(bike)} htmlFor="bookingModal" className='btn bg-red-500 text-white border-0 rounded-lg  hover:bg-red-600'>Book now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;