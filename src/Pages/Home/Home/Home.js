import React from "react";
import Banner from "../Banner/Banner";
import ContactFrom from "../ContactFrom/ContactFrom";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import SpacielService from "../SpacielService/SpacielService";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <SpacielService></SpacielService>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
      <ContactFrom></ContactFrom>
    </div>
  );
};

export default Home;
