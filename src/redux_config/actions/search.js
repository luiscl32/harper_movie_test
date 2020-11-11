import {SEARCH_START} from 'redux_config/constants';

export const search = (payload) => ({
  type: SEARCH_START,
  payload,
});
