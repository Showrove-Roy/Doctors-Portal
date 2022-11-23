import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns/esm";
import React, { useState } from "react";
import Loading from "../../Share/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentCard from "./AppointmentCard";

const AppointmentOptions = ({ selectedDate }) => {
  const [treatement, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointment", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointment?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className='my-20'>
      <p className='text-center font-bold text-secondary'>
        Available Appointments on {date}
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
          setTreatment={setTreatment}
          refetch={refetch}></BookingModal>
      )}
    </section>
  );
};

export default AppointmentOptions;
