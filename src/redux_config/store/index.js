import {createStore} from 'redux';

function reducers() {
  return {
    testing: 'hola mundo',
  };
}

export default () => {
  return {
    ...createStore(reducers),
  };
};
