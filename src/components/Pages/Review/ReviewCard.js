import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StarIcon } from '@heroicons/react/outline'
import { faStar, } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';



const ReviewCard = ({reviewData}) => {
  const {img, name, ratting, review} = reviewData;

  /* function showingRatting () {
    let arr =[];

    for(let i = 1; i <= 5; i++) {
      arr.push(<StarIcon className='w-[16.5px] h-4 inline'></StarIcon>)
    }
    for(let i = 1; i <= ratting; i++) {
      arr.shift();
      arr.push(<FontAwesomeIcon icon={faStar} />)
    }
    return [...arr];
  } */

  return (
    <div className='w-[250px] bg-teal-100 mb-2 relative'>
      <div className='flex bg-teal-300 px-2 py-2'>
        <img src={img} alt="" className='w-[25px] h-[25px] rounded-full mr-3'/>
        <h4 className='font-semibold'>{name}</h4>
      </div>
      <p className='p-2 font-light'>{review}</p>
      <p className='bg-teal-500 border-l-2  border-red-500 pl-2 font-medium text-red-900'>Ratting:  <span className='text-orange-200'>
        { 
          <Rating
            initialRating={ratting}
            emptySymbol={<StarIcon className='w-5 h-4 inline'></StarIcon>}
            fullSymbol={<FontAwesomeIcon icon={faStar} />}
            fractions={2}
            readonly
          />
        }</span></p>
    </div>
  );
};

<Rating
  initialRating={3}
  readonly
/>

export default ReviewCard;