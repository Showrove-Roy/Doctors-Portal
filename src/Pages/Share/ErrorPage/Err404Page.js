import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Err404Page = () => {
  return (
    <div>
      <Header></Header>
      <div className='w-1/3 mx-auto'>
        <Player
          autoplay
          loop
          src='https://assets1.lottiefiles.com/packages/lf20_jitmvb71.json'></Player>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Err404Page;
