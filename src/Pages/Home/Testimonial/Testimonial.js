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
    <div className='my-20 mx-10'>
      <div className='flex justify-between items-center'>
        <div className=''>
          <h2 className='text-secondary font-bold text-sm'>Appointment</h2>
          <h2 className='card-title'>What Our Patients Says</h2>
        </div>
        <img src={quote} alt='' className='w-48' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5'>
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
