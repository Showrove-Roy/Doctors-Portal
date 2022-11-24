import React from "react";
import DashboardTable from "../DashboardTable/DashboardTable";

const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between mb-5'>
        <h2 className='text-lg font-semibold'>My Dashboard</h2>
        <span className='btn btn-outline btn-sm'>23 May 2022</span>
      </div>
      <DashboardTable></DashboardTable>
    </div>
  );
};

export default Dashboard;
