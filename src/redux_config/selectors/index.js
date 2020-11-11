import {get} from 'lodash';

export const movieResult = (state) => get(state, 'search.movieResults');
