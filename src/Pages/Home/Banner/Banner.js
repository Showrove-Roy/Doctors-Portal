import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className='lg:px-20 py-5 lg:py-32'
      style={{
        background: `url(${bg}) no-repeat center center / cover`,
      }}>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={chair} className='md:w-1/2 rounded-lg shadow-2xl' alt='' />
          <div className='md:w-1/2'>
            <h1 className='md:text-5xl text-3xl font-bold'>
              Your New Smile Starts Here
            </h1>
            <p className='py-6 text-muteText'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
