import { format } from "date-fns";
import React from "react";
import { useAuth } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatement, selectedDate, setTreatment }) => {
  // get user from context api
  const { user } = useAuth();

  const date = format(selectedDate, "PP");

  const handelSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.full_name.value;
    const time_slot = from.time_slot.value;
    const email = from.email.value;
    const phone = from.phone.value;

    const appointment_details = {
      booking_date: format(new Date(), "PP"),
      appointment_date: date,
      time_slot,
      treatment_name: treatement.name,
      name,
      email,
      phone,
    };
    console.log(appointment_details);
    setTreatment(null);
  };
  return (
    <>
      <input type='checkbox' id='appointment-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='appointment-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='text-lg font-bold'>{treatement?.name}</h3>

          <form onSubmit={handelSubmit} className='mt-5'>
            <input
              type='text'
              value={date}
              disabled
              className='input input-bordered w-full my-2'
            />
            <select
              name='time_slot'
              className='select select-bordered w-full my-2'>
              {treatement?.slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name='full_name'
              type='text'
              placeholder='Full Name'
              defaultValue={user?.displayName}
              disabled={user?.displayName}
              className='input input-bordered w-full my-2'
            />
            <input
              name='email'
              type='text'
              placeholder='Email'
              defaultValue={user?.email}
              disabled={user?.email}
              className='input input-bordered w-full my-2'
            />
            <input
              name='phone'
              type='tel'
              placeholder='Phone Number'
              className='input input-bordered w-full my-2'
            />

            <input type='submit' value='Submit' className='btn w-full mt-5' />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
