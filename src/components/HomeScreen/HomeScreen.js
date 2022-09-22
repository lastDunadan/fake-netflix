import style from './HomeScreen.module.scss'
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import React from "react";

const HomeScreen = () => {
  return (
    <div className={style.homeScreen}>
      <NavBar />
      <Banner />
    </div>
  )
}

export default HomeScreen;