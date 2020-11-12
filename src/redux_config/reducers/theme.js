import {initial} from 'lodash';
import {
  THEME_CHANGE_START,
  THEME_CHANGE_COMPLETE,
  THEME_CHANGE_ERROR,
} from 'redux_config/constants/theme';

const initialState = {
  theme_change: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case THEME_CHANGE_START:
      return {...state, loading: true};
      break;

    case THEME_CHANGE_COMPLETE:
      return {...state, loading: true, theme_change: action.res};
      break;

    case THEME_CHANGE_ERROR:
      return {...state, loading: false, theme_change: false};
      break;

    default:
      return {...state};
      break;
  }
}
