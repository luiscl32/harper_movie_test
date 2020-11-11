import {
  SEARCH_START,
  SEARCH_ERROR,
  SEARCH_COMPLETE,
} from 'redux_config/constants';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_START:
      return {...state};
      break;

    case SEARCH_COMPLETE:
      return {...state};
      break;

    case SEARCH_ERROR:
      return {...state};
      break;

    default:
      return {...state};
      break;
  }
}
