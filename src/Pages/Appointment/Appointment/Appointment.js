import React, { useState } from "react";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import Banner from "../Banner/Banner";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Banner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}></Banner>
      <AppointmentOptions selectedDate={selectedDate}></AppointmentOptions>
    </div>
  );
};

export default Appointment;
