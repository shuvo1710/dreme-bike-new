import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className= 'flex h-full justify-center items-center'>
            <InfinitySpin
            width='200'
            color="#4fa94d"
            />
        </div>
    );
};

export default Loader;