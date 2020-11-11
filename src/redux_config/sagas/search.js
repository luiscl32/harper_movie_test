import {put, call, takeLatest} from 'redux-saga/effects';
import {
  SEARCH_START,
  SEARCH_ERROR,
  SEARCH_COMPLETE,
} from 'redux_config/constants';

function* searchMovie({payload}) {
  try {
  } catch (error) {}
}

export default function* search() {
  yield takeLatest(SEARCH_START, searchMovie);
}
