import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';

export default function configureStore() {

  const initialState = {};

  return createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk)//добавляется для Thunk
  );
}