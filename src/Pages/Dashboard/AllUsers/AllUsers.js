import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Share/Loading/Loading";

const AllUsers = () => {
  const {
    isLoading,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });

  if (isLoading) return <Loading />;

  const handelAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("jwToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className='flex justify-between mb-5'>
        <h2 className='text-lg font-semibold'>All Users</h2>
      </div>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th className='bg-base-300'></th>
            <th className='bg-base-300'>Name</th>
            <th className='bg-base-300'>Email</th>
            <th className='bg-base-300'>Role</th>
            <th className='bg-base-300'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  <span className='font-semibold text-sm text-secondary uppercase'>
                    {user.role}
                  </span>
                ) : (
                  <button
                    onClick={() => handelAdmin(user._id)}
                    className='btn btn-outline btn-success btn-xs'>
                    MK Admin
                  </button>
                )}
              </td>
              <td>
                <button className='btn btn-square btn-outline btn-error btn-xs'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
