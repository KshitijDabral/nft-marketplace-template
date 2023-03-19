import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";

import {  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  LikeProfile,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
  Error} from "@/components/componentsindex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
      <Title/>
      <Category/>
      <Filter/>
      <NFTCard/>
      <Collection/>
      <AudioLive/>
      <LikeProfile/>
      <FollowerTab/>
      <Slider/>
      <Brand/>
      <Video/>
      <Loader/>
      <Error/>
    </div>
  )
};

export default Home;