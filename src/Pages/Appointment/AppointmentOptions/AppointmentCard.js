import React from "react";

const AppointmentCard = ({ option, setTreatment }) => {
  return (
    <div className='card shadow-xl'>
      <div className='card-body text-center'>
        <h2 className='text-secondary font-semibold text-xl'>{option?.name}</h2>
        <p>
          {option?.slots?.length > 0 ? option?.slots[0] : "Try Another Day"}
        </p>
        <p className='text-sm'>
          {option?.slots?.length}
          {option?.slots?.length < 2 ? " SPACE" : " SPACES"} AVAILABLE
        </p>
        <div className='card-actions justify-center'>
          <label
            disabled={option?.slots?.length === 0}
            htmlFor='appointment-modal'
            onClick={() => setTreatment(option)}
            className='btn btn-primary font-semibold text-base-100'>
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
