import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className='btn btn-primary font-semibold text-base-100 bg-gradient-to-l from-primary to-secondary'>
      {children}
    </button>
  );
};

export default PrimaryButton;
