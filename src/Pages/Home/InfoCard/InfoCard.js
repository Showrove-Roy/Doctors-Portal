import React from "react";

const InfoCard = ({ data }) => {
  const { icon, title, description, bgColor } = data;
  return (
    <div className={`card card-side shadow-xl ${bgColor} text-white px-6`}>
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
