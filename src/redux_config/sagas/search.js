import {put, call, takeLatest} from 'redux-saga/effects';
import {
  SEARCH_START,
  SEARCH_ERROR,
  SEARCH_COMPLETE,
} from 'redux_config/constants/search';
import {apiCall} from 'utils/api';

function* searchMovie({payload}) {
  try {
    const res = yield call(
      apiCall,
      'search/movie',
      `&query=${payload.movieName}`,
      null,
      null,
      'GET',
    );

    yield put({type: SEARCH_COMPLETE, res});
  } catch (error) {
    yield put({type: SEARCH_ERROR, error});
  }
}

export default function* search() {
  yield takeLatest(SEARCH_START, searchMovie);
}
