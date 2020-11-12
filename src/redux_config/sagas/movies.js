import {put, call, takeLatest} from 'redux-saga/effects';
import {
  FETCH_TOP_RATED_MOVIES_START,
  FETCH_TOP_RATED_MOVIES_COMPLETE,
  FETCH_TOP_RATED_MOVIES_ERROR,
  //
  FETCH_MOVIE_DETAIL_START,
  FETCH_MOVIE_DETAIL_COMPLETE,
  FETCH_MOVIE_DETAIL_ERROR,
  //
  FETCH_MOVIE_ACTORS_START,
  FETCH_MOVIE_ACTORS_ERROR,
  FETCH_MOVIE_ACTORS_COMPLETE,
  //
  FETCH_RECOMMENDED_MOVIES_START,
  FETCH_RECOMMENDED_MOVIES_ERROR,
  FETCH_RECOMMENDED_MOVIES_COMPLETE,
  //
} from 'redux_config/constants/movies';
import {apiCall} from 'utils/api';

function* getTopRatedMovies() {
  try {
    const res = yield call(apiCall, 'movie/top_rated', '', null, null, 'GET');

    yield put({type: FETCH_TOP_RATED_MOVIES_COMPLETE, res});
  } catch (error) {
    yield put({type: FETCH_TOP_RATED_MOVIES_ERROR, error});
  }
}

function* getRecommendedMovies({payload}) {
  try {
    const res = yield call(
      apiCall,
      `movie/${payload.movieId}/recommendations`,
      '',
      null,
      null,
      'GET',
    );

    yield put({type: FETCH_RECOMMENDED_MOVIES_COMPLETE, res});
  } catch (error) {
    yield put({type: FETCH_RECOMMENDED_MOVIES_ERROR, error});
  }
}

function* getMovieDetail({payload}) {
  try {
    const res = yield call(
      apiCall,
      `movie/${payload.movieId}`,
      '',
      null,
      null,
      'GET',
    );

    yield put({type: FETCH_MOVIE_DETAIL_COMPLETE, res});
  } catch (error) {
    yield put({type: FETCH_MOVIE_DETAIL_ERROR, error});
  }
}

function* getMovieActors({payload}) {
  try {
    const res = yield call(
      apiCall,
      `movie/${payload.movieId}/credits`,
      '',
      null,
      null,
      'GET',
    );

    yield put({type: FETCH_MOVIE_ACTORS_COMPLETE, res});
  } catch (error) {
    yield put({type: FETCH_MOVIE_ACTORS_ERROR, error});
  }
}

export default function* movies() {
  yield takeLatest(FETCH_TOP_RATED_MOVIES_START, getTopRatedMovies);
  yield takeLatest(FETCH_RECOMMENDED_MOVIES_START, getRecommendedMovies);
  yield takeLatest(FETCH_MOVIE_DETAIL_START, getMovieDetail);
  yield takeLatest(FETCH_MOVIE_ACTORS_START, getMovieActors);
}
