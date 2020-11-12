import {
  FETCH_MOVIE_DETAIL_START,
  FETCH_MOVIE_DETAIL_COMPLETE,
  FETCH_MOVIE_DETAIL_ERROR,
} from 'redux_config/constants/movies';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL_START:
      return {...state, loading: true};
      break;

    case FETCH_MOVIE_DETAIL_COMPLETE:
      return {...state, loading: false, detail: action.res.data};
      break;

    case FETCH_MOVIE_DETAIL_ERROR:
      return {...state, loading: false, detail: null};
      break;

    default:
      return {...state};
      break;
  }
}
