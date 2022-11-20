import React from "react";

import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const SpacielService = () => {
  return (
    <div className='card lg:card-side bg-base-100 md:mx-40 mx-3 lg:mb-32 rounded-none'>
      <figure>
        <img
          src={treatment}
          alt='Exceptional Dental Care, on Your Terms'
          className='md:h-[460px] rounded-md'
        />
      </figure>
      <div className='card-body md:w-1/2 justify-center md:pl-10 px-0 mx-auto'>
        <h2 className='card-title'>Exceptional Dental Care, on Your Terms</h2>
        <p className='flex-grow-0'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className='card-actions justify-start mt-3'>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SpacielService;
