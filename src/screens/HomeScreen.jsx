import React from "react";
import BannerComponent from "../components/Banner/Banner.component";
import HeaderComponent from "../components/Header/Header.component";
import HomeProductComponent from "../components/Home Product/HomeProduct.component";
import "../assets/style/style.css";
import IntroduceComponent from "../components/Introduce/Introduce.component";

const HomeScreen = () => {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <div className="wrap-layout">
        <HomeProductComponent />
        <IntroduceComponent />
      </div>
    </div>
  );
};

export default HomeScreen;
