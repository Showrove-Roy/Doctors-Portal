import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import appointmentBG from "../../../assets/images/appointment.png";

const ContactFrom = () => {
  return (
    <div
      className='my-24 py-16'
      style={{
        background: `url(${appointmentBG}) no-repeat center center / cover`,
      }}>
      <h2 className='text-secondary font-bold text-sm text-center'>
        Contact Us
      </h2>
      <h2 className='text-2xl text-center text-base-200'>
        Stay connected with us
      </h2>
      <div className='max-w-sm mx-auto'>
        <div className='card-body pb-0'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Email Address'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Subject'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <textarea
              rows='4'
              type='text'
              placeholder='Your message'
              className='textarea textarea-bordered text-base-300'
            />
          </div>
          <div className='form-control mt-6 flex-row justify-center'>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
