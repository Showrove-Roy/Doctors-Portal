import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      cm_name: "Winson Herry",
      cm_photo: people1,
      cm_city: "California",
      cm_review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      cm_name: "Shae",
      cm_photo: people2,
      cm_city: "Lorath",
      cm_review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      cm_name: "Yara Greyjoy",
      cm_photo: people3,
      cm_city: "Leeds",
      cm_review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className='md:my-20 my-10 md:mx-10 mx-3'>
      <div className='flex justify-between items-center mb-10'>
        <div>
          <h2 className='text-secondary font-bold text-sm'>Appointment</h2>
          <h2 className='text-3xl'>What Our Patients Says</h2>
        </div>
        <img src={quote} alt='' className='md:w-48 w-20' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5 md:mx-5 mx-0'>
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
