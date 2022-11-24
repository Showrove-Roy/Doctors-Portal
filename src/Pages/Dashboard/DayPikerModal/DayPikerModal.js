import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";

const DayPikerModal = ({ setSelectedDate, selectedDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }
  const today = new Date();
  return (
    <div className='z-50'>
      <input type='checkbox' id='dayPikerModal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <label
            htmlFor='dayPikerModal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <div className='flex justify-center'>
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

export default DayPikerModal;
