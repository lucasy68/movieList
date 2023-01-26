import "./MovieList.scss";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MovieListContext } from "../MovieListContext";

const MovieList = () => {
  const { movieList, setMovieList, search } = useContext(MovieListContext);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e638e1f641798406f2c5a3ba2ac2aa53&language=en-US"
      )
      .then((res) => {
        console.log(res);
        const result = res?.data?.results;
        setMovieList(result);
      });
  }, []);

  return (
    <div className="movieList">
      {movieList &&
        movieList
          .filter((eachMovie) =>
            eachMovie.title
              .toLowerCase()
              .trim()
              .includes(search.toLowerCase().trim())
          )
          .map((eachMovie) => (
            <MovieCard eachMovie={eachMovie} key={eachMovie.id} />
          ))}
    </div>
  );
};

export default MovieList;
