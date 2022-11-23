import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns/esm";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentCard from "./AppointmentCard";

const AppointmentOptions = ({ selectedDate }) => {
  const [treatement, setTreatment] = useState(null);

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointment"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointment");
      const data = await res.json();
      return data;
    },
  });
  return (
    <section className='my-20'>
      <p className='text-center font-bold text-secondary'>
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-5'>
        {appointmentOptions.map((option) => (
          <AppointmentCard
            key={option._id}
            option={option}
            setTreatment={setTreatment}></AppointmentCard>
        ))}
      </div>
      {treatement && (
        <BookingModal
          treatement={treatement}
          selectedDate={selectedDate}
          setTreatment={setTreatment}></BookingModal>
      )}
    </section>
  );
};

export default AppointmentOptions;
