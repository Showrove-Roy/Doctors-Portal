import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clockIcon from "../../../assets/icons/clock.svg";
import markerIcon from "../../../assets/icons/marker.svg";
import phoneIcon from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  const infodata = [
    {
      id: 1,
      icon: clockIcon,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgColor: "bg-gradient-to-l from-primary to-secondary",
    },
    {
      id: 2,
      icon: markerIcon,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgColor: "bg-accent",
    },
    {
      id: 3,
      icon: phoneIcon,
      title: "Contact us now",
      description: "+000 123 456789",
      bgColor: "bg-gradient-to-l from-primary to-secondary",
    },
  ];
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6'>
      {infodata.map((data) => (
        <InfoCard key={data.id} data={data}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
