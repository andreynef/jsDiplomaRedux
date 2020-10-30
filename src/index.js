import React from 'react';//импорт реакт библиотеки для работы с этим файлом
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './functions/configureStore';
import App from './containers/App.js';
import {BrowserRouter} from "react-router-dom";
import toAuth from "./functions/toAuth";


const accessToken = JSON.parse(localStorage.getItem('accessToken'));
// const accessToken = "AFaBKCHAaRKIVtFmrXxyflnwHn69VaTqdU70ErSmtw4";

if (!accessToken){
  alert('index.js no token -> toAuth()')
  toAuth();
}else{
  alert('index.js token -> render')

  const store = configureStore();

  ReactDOM.render (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    ,
    document.querySelector("#root")
  );
}

