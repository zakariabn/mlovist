import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <div className='text-center '>
        <h1 className='text-4xl font-bold text-teal-700'>Page not found</h1>
        <h3 className='text-3xl font-bold text-red-600 mb-5'>404</h3>
        <button className='bg-green-300 px-3 py-1 rounded-sm shadow-sm hover:font-semibold hover:text-teal-700 duration-75'><Link to='/'><span className='hover:shadow-sm'>GO HOME</span></Link></button>
      </div>
    </div>
  );
};

export default NotFound;