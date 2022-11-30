import React from 'react';
import { Link } from 'react-router-dom';
import image from './error-page.gif'

const ErrorPage = () => {
    return (
        <div>
        <section className='flex items-center h-screen p-16  text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img className='h-[400px] flex justify-center items-center mb-4' src={image} alt="" />
        <div className='max-w-md text-center'>
          
          <Link
            to='/'
            className='p-2 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;