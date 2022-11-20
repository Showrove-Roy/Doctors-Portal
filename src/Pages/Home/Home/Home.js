import React from "react";
import Banner from "../Banner/Banner";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import SpacielService from "../SpacielService/SpacielService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <SpacielService></SpacielService>
      <HomeAppointment></HomeAppointment>
    </div>
  );
};

export default Home;
