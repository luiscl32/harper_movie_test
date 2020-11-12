import {get} from 'lodash';

export const isLoadingMovies = (state) => get(state, 'search.loading');
export const movies = (state) => get(state, 'search.movies.results');
