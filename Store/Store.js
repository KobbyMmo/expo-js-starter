import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../Reducer';
import { loadState, saveState } from './Storage';

const middleware = [thunk, logger];

export default (persistedState) => {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middleware)
  );
  store.subscribe(() => {
    saveState({
      account: store.getState().account,
    });
  });
  return store;
};
