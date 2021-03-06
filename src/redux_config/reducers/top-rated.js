import {
  FETCH_TOP_RATED_MOVIES_START,
  FETCH_TOP_RATED_MOVIES_COMPLETE,
  FETCH_TOP_RATED_MOVIES_ERROR,
} from 'redux_config/constants/movies';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_RATED_MOVIES_START:
      return {...state, loading: true};
      break;

    case FETCH_TOP_RATED_MOVIES_COMPLETE:
      return {...state, loading: false, movies: action.res.data.results};
      break;

    case FETCH_TOP_RATED_MOVIES_ERROR:
      return {...state, loading: false, movies: null};
      break;

    default:
      return {...state};
      break;
  }
}
