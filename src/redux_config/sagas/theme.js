import {put, call, takeLatest} from 'redux-saga/effects';
import {
  THEME_CHANGE_START,
  THEME_CHANGE_ERROR,
  THEME_CHANGE_COMPLETE,
} from 'redux_config/constants/theme';

function* changeTheme({payload}) {
  try {
    const res = payload.theme_change;

    yield put({type: THEME_CHANGE_COMPLETE, res});
  } catch (error) {
    yield put({type: THEME_CHANGE_ERROR, error});
  }
}

export default function* search() {
  yield takeLatest(THEME_CHANGE_START, changeTheme);
}
