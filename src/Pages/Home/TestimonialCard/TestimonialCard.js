import React from "react";

const TestimonialCard = ({ review }) => {
  const { cm_name, cm_photo, cm_city, cm_review } = review;
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <p>{cm_review}</p>
        <div className='card-actions justify-start mt-10'>
          <div className='avatar'>
            <div className='w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={cm_photo} alt='' />
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='font-semibold text-lg'>{cm_name}</h3>
            <p>{cm_city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
