import {createStore, applyMiddleware} from 'redux';

import ReduxSaga from 'redux-saga';
import rootReducer from 'redux_config/reducers';

const reduxSaga = ReduxSaga();

export default () => {
  return {
    ...createStore(rootReducer, applyMiddleware(reduxSaga)),
  };
};
