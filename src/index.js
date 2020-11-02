import React from 'react';//импорт реакт библиотеки для работы с этим файлом
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './functions/configureStore';
import App from './containers/App.js';
import {BrowserRouter} from "react-router-dom";
import toAuth from "./functions/toAuth";
import {HOMEPAGE} from "./constants";


const accessToken = JSON.parse(localStorage.getItem('accessToken'));
// const accessToken = "PtShaxn0gdCA0zVYBUWvUSpfO_nr7WB93_mgRwJ4ITE";

if (!accessToken){
  toAuth();
}else if (window.location.pathname !=='/' || '/user' ||'/auth') {
  console.log('homepage is:', HOMEPAGE)
  alert('go to 404')
  window.location.assign(`https://jsdiploma.nef-an.ru/404`)
}else if(window.location.pathname ==='/404'){
  alert('in 404')
  return
}else{


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

