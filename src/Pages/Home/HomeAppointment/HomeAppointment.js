import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctorSmall from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const HomeAppointment = () => {
  return (
    <div
      className='lg:mt-48'
      style={{
        background: `url(${appointment}) no-repeat center center / cover`,
      }}>
      <div className='card lg:card-side '>
        <figure style={{ overflow: "visible" }}>
          <img
            src={doctorSmall}
            alt='Album'
            className='w-3/4 -mt-28 hidden lg:block'
          />
        </figure>
        <div className='card-body lg:w-1/2 max-w-lg mx-auto text-white px-3'>
          <h2 className='text-secondary font-bold text-sm'>Appointment</h2>
          <h2 className='card-title'>Make an appointment Today</h2>
          <p className='text-base-300'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className='card-actions justify-start mt-3'>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
