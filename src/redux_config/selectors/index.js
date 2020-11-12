import {get} from 'lodash';

export const isLoadingMovies = (state) => get(state, 'search.loading');
export const isLoadingTopRated = (state) =>
  get(state, 'top_rated_movies.loading');
export const isLoadingRecommended = (state) =>
  get(state, 'recommended_movies.loading');
//
export const movies = (state) => get(state, 'search.movies.results');
//
export const top_rated_movies = (state) =>
  get(state, 'top_rated_movies.movies');
export const recommended_movies = (state) =>
  get(state, 'recommended_movies.movies');
//
export const movie_detail = (state) => get(state, 'movie_detail.detail');
//
export const movie_actors = (state) => get(state, 'movie_actors.cast');
//
export const app_theme = (state) => get(state, 'theme.theme_change');
