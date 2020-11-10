import React from "react";//импорт реакт библиотеки для работы с этим файлом
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers/App.js";
import {BrowserRouter} from "react-router-dom";
import {Auth} from "./components/Auth/Auth";

export const store = configureStore();
const token = localStorage.getItem("accessToken");
// const token = "quPTXBIX3NauNHAAWAlxyJtQ6pHhL-jtcuEUaO5hFzo";
// console.log(token)
// alert('in index. Token in  local is in console', token)
// const token = "1HW7FNACP1ZopVpb0MPbNIl-rQMN-NnbIiwjnhkqa3E";
// localStorage.setItem("accessToken", JSON.stringify("1HW7FNACP1ZopVpb0MPbNIl-rQMN-NnbIiwjnhkqa3E"));

  ReactDOM.render (
    <Provider store={store}>
      <BrowserRouter>
        {token ? <App /> : <Auth/>}
      </BrowserRouter>
    </Provider>
    ,
    document.querySelector("#root")
  );


//oiudsfsdhfodshfjsfhdsjfhdskjfhkdsjhfkdsdskjfhjkdshfkjhfjkdhjkfdshkjfdsfdskfjksdfdsfhksjdfhksdjh lorem







// const isPageExist = () => {
//   console.log('in isPageExist');
//   return window.location.pathname === "/" ||
//     window.location.pathname === "/cardpage" ||
//     window.location.pathname === "/404"
// }
//
// if (!isPageExist()) {//если таких страниц в моем списке нет, то...
//   alert('nopage');
//   window.location.assign(`"https://jsdiploma.nef-an.ru"/404`);//...отправляем на мою 404
// }else{
// }


//было и работало

// import React from "react";//импорт реакт библиотеки для работы с этим файлом
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import configureStore from "./functions/configureStore";
// import App from "./containers/App.js";
// import {BrowserRouter} from "react-router-dom";
// import toAuth from "./functions/toAuth";
// import {BEARER_TOKEN, HOMEPAGE} from "./constants/unsplash";
//
// const isPageExist =//true если это одна из этих страниц
//   window.location.pathname === "/" ||
//   window.location.pathname === "/cardpage" ||
//   window.location.pathname === "/404";
//
// if (!BEARER_TOKEN){
//   toAuth();
// }else if (!isPageExist){//если false, тобишь таких страниц нет, то...
//   window.location.assign(`${HOMEPAGE}/404`);//...отправляем на мою 404
// }else{
//
//   const store = configureStore();
//
//   ReactDOM.render (
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//     ,
//     document.querySelector("#root")
//   );
// }

