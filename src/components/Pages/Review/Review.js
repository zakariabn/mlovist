import React from 'react';
import useReviews from '../../../hooks/useReviews';
import ReviewCard from './ReviewCard';


const Review = () => {
  const [reviews, setReviews] = useReviews();  
  return (
    <div className='w-full max-w-screen-xl mt-10 mb-40'>
      <div className='grid grid-cols-3 justify-items-center items-center'>
      {
        reviews.map(review => {
          return <ReviewCard key={review._id} reviewData={review}></ReviewCard> 
        })
      }
      </div>
    </div>
  );
};

export default Review;