import {
  SEARCH_START,
  SEARCH_ERROR,
  SEARCH_COMPLETE,
} from 'redux_config/constants/search';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_START:
      return {...state, loading: true};
      break;

    case SEARCH_COMPLETE:
      return {...state, loading: false, movies: action.res.data};
      break;

    case SEARCH_ERROR:
      return {...state, loading: false, movies: null};
      break;

    default:
      return {...state};
      break;
  }
}
