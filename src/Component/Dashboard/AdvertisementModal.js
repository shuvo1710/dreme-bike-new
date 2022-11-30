import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AdvertisementModal = ({ modalData }) => {
    
    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address, verification } = modalData;

    

    const AdvertisementButton = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email)
        const advertisementProducts = {
            purchase_Price,
            sell_price,
            picture,
            age,
            time,
            seller_name,
            product_name,
            phone,
            address,
            verification,
            email
            
        }

        fetch('https://dream-bike-server.vercel.app/advertisementProduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertisementProducts)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('successfully added on server')
                event.target.reset();
            })
            .catch(error => {
                console.log(error);
            })


            console.log(advertisementProducts)
            
    }
    
    
    return (
        <div>

            <input type="checkbox" id="advirtisementModal" className="modal-toggle" />
            <div className="modal">

                <form onSubmit={AdvertisementButton} className="modal-box">
                    <label htmlFor="advirtisementModal" className="btn btn-sm btn-circle bg-yellow-300 border-0 text-black absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{product_name}</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  name='email' placeholder="Type Your Email" className="input input-sm input-bordered input-primary" required/>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sell Price</span>
                        </label>
                        <input disabled defaultValue={sell_price} type="number" required  placeholder="Type Your Email" className="input input-sm input-bordered input-primary" />
                    </div>
                    <input type="submit" className='btn bg-red-500 border-0 rounded-lg text-white w-full my-5' value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default AdvertisementModal;