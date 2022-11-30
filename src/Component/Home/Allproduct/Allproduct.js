import React from 'react';
import { Link } from 'react-router-dom';
import { FaMotorcycle, FaBicycle } from 'react-icons/fa';

import logo1 from '../../../bike/bike logo/BMW logo.jpg'
import logo2 from '../../../bike/bike logo/Ducati logo.jpg'
import logo3 from '../../../bike/bike logo/harley logo.png'
import logo4 from '../../../bike/bike logo/hiro logo.png'
import logo5 from '../../../bike/bike logo/kawasaki logo.jpg'
import logo6 from '../../../bike/bike logo/logo-yamaha.png'

const Allproduct = () => {
    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-full my-40">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-neutral uppercase rounded-full bg-teal-accent-400">
                        <div className='flex justify-center items-center gap-1'>
                            Our <span><FaMotorcycle className='text-red-500'></FaMotorcycle></span> Products
                        </div>
                    </p>
                </div>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Link to='/bmwBike'>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={logo1}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-red-500">
                                    BMW
                                </p>


                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/ducati'>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={logo2}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-red-500">
                                    Ducati
                                </p>


                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/harleyDavidson'>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={logo3}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-red-500">
                                    Harley davidson
                                </p>


                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/hero'>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={logo4}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-red-500">
                                    Hero
                                </p>


                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/kawasaki'>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={logo5}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-red-500">
                                    kawasaki
                                </p>


                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/yamaha'>

                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={logo6}
                                alt="Person"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg font-bold text-red-500">
                                    Yamaha
                                </p>


                                <div className="flex items-center justify-center space-x-3">
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                    <a
                                        href="/"
                                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                    >

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Allproduct;