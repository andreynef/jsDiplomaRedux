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

//суть всего Redux

// function createStore(reducer, initialState) {
//   let state = initialState
//   return {
//     dispatch: action => { state = reducer(state, action) },
//     getState: () => state,
//   }
// }