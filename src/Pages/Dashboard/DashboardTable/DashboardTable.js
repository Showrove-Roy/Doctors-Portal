import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../../Contexts/AuthProvider";
import Loading from "../../Share/Loading/Loading";

const DashboardTable = ({ date }) => {
  const { user } = useAuth();
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email, date],
    queryFn: () =>
      fetch(
        `http://localhost:5000/bookings?email=${user?.email}&date=${date}`
      ).then((res) => res.json()),
  });
  if (isLoading) return <Loading />;
  return (
    <div>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th className='bg-base-300'></th>
            <th className='bg-base-300'>Name</th>
            <th className='bg-base-300'>Service</th>
            <th className='bg-base-300'>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{booking.name}</td>
              <td>{booking.treatment_name}</td>
              <td>{booking.time_slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
