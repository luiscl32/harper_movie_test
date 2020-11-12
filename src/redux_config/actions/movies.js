import {
  FETCH_MOVIE_ACTORS_START,
  FETCH_MOVIE_DETAIL_START,
  FETCH_RECOMMENDED_MOVIES_START,
  FETCH_TOP_RATED_MOVIES_START,
} from 'redux_config/constants/movies';

/* top rated */
export const fetchTopRatedMovies = (payload) => ({
  type: FETCH_TOP_RATED_MOVIES_START,
  payload,
});

/* recommended */
export const fetchRecommendedMovies = (payload) => ({
  type: FETCH_RECOMMENDED_MOVIES_START,
  payload,
});

/* actors */
export const fetchMovieActors = (payload) => ({
  type: FETCH_MOVIE_ACTORS_START,
  payload,
});

/* detail */
export const fetchMovieDetail = (payload) => ({
  type: FETCH_MOVIE_DETAIL_START,
  payload,
});
