import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const ReviewCard = ({reviewData}) => {
  const {img, name, ratting, review} = reviewData;

  function showingRatting () {
    let arr =[];

    for(let i = 1; i <= ratting; i++) {
      arr.push(<FontAwesomeIcon icon={faStar} />)
    }
    return [...arr];
  }

  return (
    <div className='w-[250px] bg-teal-100 mb-2'>
      <div className='flex bg-teal-300 px-2 py-2'>
        <img src={img} alt="" className='w-[25px] h-[25px] rounded-full mr-3'/>
        <h4 className='font-semibold'>{name}</h4>
      </div>
      <p className='p-2 font-light'>{review}</p>
      <p className='bg-teal-500 border-l-2 border-red-500 pl-2 font-medium text-red-900'>Ratting:  <span className='text-orange-200'>{ showingRatting() }</span></p>
    </div>
  );
};

export default ReviewCard;