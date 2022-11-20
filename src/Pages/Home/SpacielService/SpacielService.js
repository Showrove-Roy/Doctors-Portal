import React from "react";

import treatment from "../../../assets/images/treatment.png";

const SpacielService = () => {
  return (
    <div className='card lg:card-side bg-base-100 mx-40 mb-72 rounded-none'>
      <figure>
        <img
          src={treatment}
          alt='Exceptional Dental Care, on Your Terms'
          className='h-[460px] rounded-md'
        />
      </figure>
      <div className='card-body w-1/2 justify-center'>
        <h2 className='card-title'>Exceptional Dental Care, on Your Terms</h2>
        <p className='flex-grow-0'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className='card-actions justify-start'>
          <button className='btn btn-primary text-white font-semibold bg-gradient-to-l from-primary to-secondary'>
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpacielService;
