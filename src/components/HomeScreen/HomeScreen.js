import React from "react";
import style from './HomeScreen.module.scss'
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row"
import requests from "../../comm/Requests";

const HomeScreen = () => {
  return (
    <div className={style.homeScreen}>
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />

      <Row
        title="Trending now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action"
        fetchUrl={requests.fetchAction}
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedy}
      />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorror}
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomance}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocs}
      />



    </div>
  )
}

export default HomeScreen;