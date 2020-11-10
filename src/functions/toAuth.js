// import {getAuthenticationUrl, setAccessToken, unsplash} from "./unsplash";
//
// export default function toAuth() {
//
//   const codeFromUrl = window.location.search.split("code=")[1];// Считываем код из URL
//   console.log('in toAuth. codeFromUrl:', codeFromUrl);
//   const token = unsplash;
//   console.log('in toAuth. unsplash._bearerToken:', unsplash);
//
//   if (token) {//если есть токен то выходим и продолжаем монтаж.
//     console.log('all good. We have token. Returning from toAuth')
//     return
//   }
//
//   if (codeFromUrl) {//если в строке есть код то значит идет процедура авторизации. Отправляем запрос на получение токена.
//     alert('in toAuth(). codeFromUrl ? - yes')
//     setAccessToken();
//   }
//
//   if (!token && !codeFromUrl) {//процедура логина на сайте Unsplash. = генерации URL кода (После ввода логина сайт отправляет на callbackUrl с кодом)
//     alert('in toAuth(). !token && !codeFromUrl')
//     getAuthenticationUrl();
//   }
// }

















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