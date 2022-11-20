import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const Banner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div
      className='lg:px-20 py-5 lg:py-32'
      style={{
        background: `url(${bg}) no-repeat center center / cover`,
      }}>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={chair} className='md:w-1/2 rounded-lg shadow-2xl' alt='' />
          <div className='md:w-1/2 md:ml-20'>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
