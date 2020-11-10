import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers/App.js";
import {BrowserRouter} from "react-router-dom";
import {Auth} from "./components/Auth/Auth";

export const store = configureStore();
const token = localStorage.getItem("accessToken");

  ReactDOM.render (
    <Provider store={store}>
      <BrowserRouter>
        {token ? <App /> : <Auth/>}
      </BrowserRouter>
    </Provider>
    ,
    document.querySelector("#root")
  );
