import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UseContext/UseContext';
import Loader from '../../Share/Loader/Loader';

const AddProducts = () => {
    const {user} = useContext(AuthContext)
    const { data: allSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['allSeller', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://dream-bike-server.vercel.app/verified?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    // { , , ,verification, , time, , , ,  }
    // { purchase_Price, sell_price, picture,verification, age, time, seller_name, product_name, phone, address }
    const dateTime = new Date().toLocaleString();
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const product_name = form.product_name.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const brand = form.brand.value;
        const age = form.age.value;
        const purchase_Price = form.purchase_Price.value;
        const sell_price = form.sell_price.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const verification = form.verification.value;
        const image = form.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?key=30c45cbf02b1638a98e8ac99319f604c"

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData.data.display_url)
                const productInfo = {
                    product_name,
                    seller_name,
                    email,
                    brand,
                    age,
                    purchase_Price,
                    sell_price,
                    address,
                    phone,
                    verification,
                    picture: imgData.data.display_url,
                    time: dateTime
                }
                console.log(productInfo)

                fetch('https://dream-bike-server.vercel.app/add-product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('successFully add you product')
                        form.reset()
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error)
            })






    }
    return (
        <div>
            <h1 className='text-blue-500 text-2xl font-bold text-center my-4'>Add Products</h1>

            <div className="hero w-full lg:w-3/4 lg:mx-auto">

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-white">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Product Name</span>
                            </label>
                            <input type="text" required name='product_name' placeholder="Product Name" className="input input-sm input-bordered border-red-500" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" disabled  value={user?.displayName} required name='seller_name' placeholder="seller Name" className="input input-sm input-bordered border-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" disabled  defaultValue={user?.email} required name='email' placeholder="Seller Email" className="input input-sm input-bordered border-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Verification</span>
                            </label>
                            {
                                allSeller &&
                                allSeller?.map((seller, i)=>seller?.verification ?<input disabled  key={i} type="text" value={seller?.verification} required name='verification' placeholder="Seller Email" className="input input-sm input-bordered border-red-500"/> 
                                :
                                <input disabled  key={i} type="email" value="unverified" required name='verification' placeholder="Seller Email" className="input input-sm input-bordered border-red-500"/>
                                )
                            }
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand Name</span>

                            </label>
                            <select name='brand' className="select select-bordered border border-red-500 rounded-lg">
                                <option>BMW</option>
                                <option>Ducati</option>
                                <option>Harley</option>
                                <option>Kawasaki</option>
                                <option>Hero</option>
                                <option>Yamaha</option>
                            </select>

                        </div>

                        {/* select brand end */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Uses month</span>
                            </label>
                            <input type="number" required name='age' placeholder="Uses month" className="input input-sm input-bordered border-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Purchase Price</span>
                            </label>
                            <input type="number" required name='purchase_Price' placeholder="Purchase Price" className="input input-sm input-bordered border-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input type="number" required name='sell_price' placeholder="Selling Price" className="input input-sm input-bordered border-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pick Up Address</span>
                            </label>
                            <input type="text" required name='address' placeholder="Pick Up Address" className="input input-sm input-bordered border-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" required name='phone' placeholder="Phone Number" className="input input-sm input-bordered border-red-500" />
                        </div>

                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file" required name='image' placeholder="photo" className="input input-bordered shadow-lg  border-red-500" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500 hover:bg-red-500 border-0 rounded-lg text-white">Submit</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddProducts;