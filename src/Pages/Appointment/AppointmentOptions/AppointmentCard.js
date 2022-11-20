import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const AppointmentCard = ({ option }) => {
  return (
    <div className='card shadow-xl'>
      <div className='card-body text-center'>
        <h2 className='text-secondary font-semibold text-xl'>{option?.name}</h2>
        <p>{option?.slots?.length > 0 && option?.slots[0]}</p>
        <p className='text-sm'>
          {option?.slots?.length}{" "}
          {option?.slots?.length < 2 ? "SPACE" : "SPACES"} AVAILABLE
        </p>
        <div className='card-actions justify-center'>
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
