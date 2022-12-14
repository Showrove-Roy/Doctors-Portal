import React from "react";

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={icon} alt={title} className='h-28' />
      </figure>
      <div className='card-body items-center text-center px-3'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
