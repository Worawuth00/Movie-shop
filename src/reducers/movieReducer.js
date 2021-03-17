import {
  MOVIE_LIST_SUCCESS,
  MOVIE_SEARCH_SUCCESS,
} from "../constants/movieConstant";

export const movieListReducer = (state = [], action) => {
  switch (action.type) {
    case MOVIE_LIST_SUCCESS:
      return action.payload;
    case MOVIE_SEARCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
