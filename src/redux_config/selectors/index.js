import {get} from 'lodash';

export const isLoadingMovies = (state) => get(state, 'search.loading');
export const movies = (state) => get(state, 'search.movies.results');
export const top_rated_movies = (state) =>
  get(state, 'top_rated_movies.movies');
