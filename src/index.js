import React from "react";//импорт реакт библиотеки для работы с этим файлом
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./functions/configureStore";
import App from "./containers/App.js";
import {BrowserRouter} from "react-router-dom";
import toAuth from "./functions/toAuth";
import {BEARER_TOKEN, HOMEPAGE} from "./constants/unsplash";

const isPageExist =//true если это одна из этих страниц
  window.location.pathname === "/" ||
  window.location.pathname === "/cardpage" ||
  window.location.pathname === "/404";

if (!BEARER_TOKEN){
  toAuth();
}else if (!isPageExist){//если false, тобишь таких страниц нет, то...
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

