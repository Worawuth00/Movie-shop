import axios from "axios";
import { MOVIE_LIST_SUCCESS, MOVIE_SEARCH_SUCCESS } from "../constants/movieConstant";

export const listMovie = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=148df88f93f21a7ad6a77f58c7ffd9d8"
  );
  const movieList = data.results.map((movie) => {
    return { ...movie, price: 100 };
  });

  dispatch({ type: MOVIE_LIST_SUCCESS, payload: movieList });
};

export const serachMovie = (search) => async (dispatch) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=148df88f93f21a7ad6a77f58c7ffd9d8&query=${search}`
  );
  const movieSearch = data.results.map((movie) => {
    return { ...movie, price: 100 };
  });
  dispatch({ type: MOVIE_SEARCH_SUCCESS, payload: movieSearch });
};
