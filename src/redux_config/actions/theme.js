import {THEME_CHANGE_START} from 'redux_config/constants/theme';

export const changeTheme = (payload) => ({
  type: THEME_CHANGE_START,
  payload,
});
