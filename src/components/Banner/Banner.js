import style from './Banner.module.scss'
import {useEffect, useState} from "react"
import axios from '../../comm/axios'
import requests from '../../comm/Requests'

const Banner = () => {

  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request;
    }

    fetchData();
  }, [])

  console.log(movie)

  const trimDescription = (descTxt, descLength) => {
    return descTxt?.length > descLength ? descTxt.substr(0, descLength - 1) + '...' : descTxt;
  }

  return (
    <header
      className={style.banner}
      style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}
    >
      <div className={style.banner__content}>
        <h1 className={style.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className={style.banner__button}>Play</button>
          <button className={style.banner__button}>My List</button>
        </div>
        <p className={style.banner__description}>
          {trimDescription(movie?.overview, 250)}
        </p>
      </div>
      <div className={style.banner__fade}></div>
    </header>
  )
}

export default Banner;