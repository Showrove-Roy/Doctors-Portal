import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";

const AppointmentOptions = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className='my-20'>
      <p className='text-center font-bold text-secondary'>
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-5'>
        {appointmentOptions.map((option) => (
          <AppointmentCard key={option._id} option={option}></AppointmentCard>
        ))}
      </div>
    </section>
  );
};

export default AppointmentOptions;
