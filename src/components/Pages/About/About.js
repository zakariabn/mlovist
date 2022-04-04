import React from 'react';

const About = () => {
  return (
    <div className='w-full max-w-screen-xl mt-10 mb-40 flex flex-col items-center'>
      <h1 className='text-4xl font-bold underline'>Contact</h1>
      <button 
        className='bg-orange-600 px-4 py-2 rounded-full text-white hover:text-black hover:bg-orange-500 duration-100 ease-in-out flex justify-center mt-5'
        onClick={() => window.location.assign('mailto:someone@example.com')}>
          <span className='text-xl'>
            Mail Us
          </span>
      </button>
    </div>


  );
};

export default About;