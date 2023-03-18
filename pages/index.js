import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection } from "@/components/componentsindex";
import { Service } from "@/components/componentsindex";
import { BigNFTSlider, Subscribe } from "@/components/componentsindex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
    </div>
  )
};

export default Home;