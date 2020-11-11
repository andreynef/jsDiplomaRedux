import rootReducer from "../reducers";

import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

export default function configureStore() {
  const initialState = {
    items: [],
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)//добавляется для Thunk
  );
}























// import {configureStore, createSlice, getDefaultMiddleware} from "@reduxjs/toolkit";
//
// const middleware=[loggerMiddleware, myThunkUnsplash];
//
// const rootReducer = combineReducers({
//   user,
//   items,
//   login,
// })
//
// const consoleLogMiddleware = (store) => (next) => (action) => {
//   console.log(action);
//   console.log(store.getState());
//   return next(action)
// }
//
// const store = configureStore({
//   reducer:rootReducer,//или отдельно reducer:{buttonReducer}
//   middleware: [...getDefaultMiddleware(), consoleLogMiddleware]
// })
//
// const buttonSlice = createSlice ({//возвращает пачкой action и reducer. Замена отдельных createAction и createReducer
//   name: 'button',//type экшена на выходе будет называться "button/buttonClicked"
//   initialState: {
//     buttonClicked: false,
//   },
//   reducers: {
//     //case  = BUTTON_CLICKED
//     buttonClicked: state=>{//можно мутировать и не возвращать результат. Slice автоматом сделает копию и вернет.
//       state.buttonClicked = true;
//     },
//     //case = "SMTHELSE"
//   }
// })
//
// const {buttonClicked} = buttonSlice.actions //экшн достатый из buttonSlice
// const buttonReducer = buttonSlice.reducer // редусер достатый из buttonSlice












//суть Redux в 7 строках.

// function createStore(reducer, initialState) {
//   let state = initialState
//   return {
//     dispatch: (action) => { state = reducer(state, action) },
//     getState: () => state,
//   }
// }