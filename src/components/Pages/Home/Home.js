import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../../../asset/images/ora-amake.png'
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';
import ReviewCard from '../Review/ReviewCard';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  let count = 0;

  return (
    <div className='w-full max-w-screen-xl mt-10 mb-40'>
      <div className='bg-[#e2e2e2] p-2 rounded-r-3xl mb-5'>
        <h2 className='border-l-4 border-red-600 pl-5 '>
          <span className='font-bold mr-5 text-teal-500'>Movie name :</span> 
          <span className='font-semibold text-orange-500'>
            <a href="https://www.youtube.com/watch?v=69Oxd18AZ7g" target='_blank'>
              Ora amake valo hota dilo na</a>
          </span>
        </h2>
      </div>
      <div>
        
        <div className='flex justify-center mb-5'>
          <a href="https://www.youtube.com/watch?v=RIP_LqpXb4k" target='_blank'>
            <img src={Poster} alt='Best bangla movie ever' className='rounded-md'/>
          </a>
        </div>


        <div className='mb-24'>
          <h3 className='bg-teal-400 p-2 rounded-t-lg border-b-2 border-orange-500 text-xl font-bold mb-4'>
            Movie Analysis
          </h3>
          <p className='border-l-4 border-orange-500 ml-5 pl-5'> জানিনা ছবিটা কেমন কিন্তু যতদূর আমার মনে হয় আপনার দেখা ঠিক হবে না । </p>
        </div>

        <div className=''>
          <h3 className='bg-teal-400 p-2 rounded-t-lg border-b-2 border-orange-500 text-xl font-bold mb-4'>
            Movie Reviews <span className='text-orange-700'>({reviews.length})</span>
          </h3>
          <div className='flex flex-col items-center'>
            <div className='w-full grid grid-cols-3 justify-items-center items-center mb-5'>
              {
                reviews.map(review => {
                  count++;
                  if (count <= 3) {
                    return <ReviewCard key={review._id} reviewData={review}></ReviewCard>
                  }
                  else {
                    return "";
                  }
                })
              }
            </div>
            <Link to="/reviews" className='bg-orange-400 px-2 p-1 rounded-md'>Sell all reviews</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;