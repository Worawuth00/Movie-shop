import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listMovie } from "../actions/movieAction";
import Movie from "../components/Movie";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);

  useEffect(() => {
    dispatch(listMovie());
  }, [dispatch]);

  return (
    <section className="movie">
      {movieList.length === 0 ? (
        <h1 className="not-found">Movie not found</h1>
      ) : (
        <div className="movie-center container">
          {movieList.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </div>
      )}
    </section>
  );
};

export default HomeScreen;
