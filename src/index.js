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

const isExist =//true если это одна из этих страниц
  window.location.pathname === '/' ||
  window.location.pathname === '/auth' ||
  window.location.pathname === '/user' ||
  window.location.pathname === '/404';

if (!accessToken){
  toAuth();
}else if (!isExist){//если false, тобишь не мои страницы то...
  window.location.assign(`${HOMEPAGE}/404`);//...отправляем на мою 404
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

