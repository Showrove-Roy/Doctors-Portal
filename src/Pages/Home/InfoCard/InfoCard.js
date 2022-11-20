import React from "react";

const InfoCard = ({ data }) => {
  const { icon, title, description, bgColor } = data;
  return (
    <div
      className={`card md:card-side md:pt-0 pt-5 shadow-xl ${bgColor} text-white px-6 rounded-md`}>
      <figure>
        <img src={icon} alt='Movie' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
