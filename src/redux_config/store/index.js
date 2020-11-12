import {createStore, applyMiddleware} from 'redux';

import ReduxSaga from 'redux-saga';
import rootReducer from 'redux_config/reducers';
import rootSaga from 'redux_config/sagas';

const reduxSaga = ReduxSaga();

export default () => {
  return {
    ...createStore(rootReducer, applyMiddleware(reduxSaga)),
    runSaga: reduxSaga.run(rootSaga),
  };
};
