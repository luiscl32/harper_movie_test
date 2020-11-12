import {
  FETCH_MOVIE_ACTORS_START,
  FETCH_MOVIE_ACTORS_COMPLETE,
  FETCH_MOVIE_ACTORS_ERROR,
} from 'redux_config/constants/movies';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_ACTORS_START:
      return {...state, loading: true};
      break;

    case FETCH_MOVIE_ACTORS_COMPLETE:
      return {...state, loading: false, cast: action.res.data.cast};
      break;

    case FETCH_MOVIE_ACTORS_ERROR:
      return {...state, loading: false, cast: null};
      break;

    default:
      return {...state};
      break;
  }
}
