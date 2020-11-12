import {SEARCH_START} from 'redux_config/constants/search';

export const searchMovie = (payload) => ({
  type: SEARCH_START,
  payload,
});
