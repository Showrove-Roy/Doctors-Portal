import { format } from "date-fns";
import React, { useState } from "react";
import DashboardTable from "../DashboardTable/DashboardTable";
import DayPikerModal from "../DayPikerModal/DayPikerModal";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = format(selectedDate, "PP");

  return (
    <div>
      <div className='flex justify-between mb-5'>
        <h2 className='text-lg font-semibold'>My Appointments</h2>
        <label htmlFor='dayPikerModal' className='btn btn-outline btn-sm'>
          {date}
        </label>
      </div>
      <DashboardTable date={date}></DashboardTable>
      <DayPikerModal
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}></DayPikerModal>
    </div>
  );
};

export default Dashboard;
