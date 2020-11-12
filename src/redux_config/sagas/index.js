import {all} from 'redux-saga/effects';

import search from './search';
import movies from './movies';

export default function* rootSaga() {
  yield all([search(), movies()]);
}
