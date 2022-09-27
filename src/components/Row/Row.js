import React, {useState, useEffect} from "react";
import axios from "../../comm/axios";
import style from "./Row.module.scss"

const Row = ({title, fetchUrl, isLarge = false}) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl])

  console.log(movies)

  return (
    <div className={style.row}>
      <h2 className={style.row__title}>
        {title}
      </h2>
      <div className={style.row__posters}>
        {movies.map(
          (movie) => (
            (isLarge && movie.poster_path) ||
            (!isLarge && movie.backdrop_path)
          ) && (
            <img
              key={movie.id}
              className={`${style.row__poster} ${(isLarge && style.row__posterLarge)}`}
              src={`https://image.tmdb.org/t/p/original${isLarge ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Row;