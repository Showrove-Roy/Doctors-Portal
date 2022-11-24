import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const Banner = ({ selectedDate, setSelectedDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }
  const today = new Date();
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
              footer={footer}
              onDayClick={setSelectedDate}
              disabled={{ before: today }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
