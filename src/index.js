import React from 'react';//импорт реакт библиотеки для работы с этим файлом
import ReactDOM from 'react-dom';//импорт реактдом библиотеки для работы с этим файлом (только в том файле где находится строчка ReactDOM.render)
import App from './containers/App.js';
import {createStore} from 'redux';
import reducer from './reducers';
import {BrowserRouter} from "react-router-dom";
import toAuth from "./functions/toAuth";


const accessToken = JSON.parse(localStorage.getItem('accessToken'));//считать массив в JSON формате('text','text') из localStorage и привести ее обратно в божеский вид путем parse.
if (!accessToken){
  alert('no auth!, go take a shit')
  toAuth();
}
// else
  // {
  // const initialState = {}
  //
  // const store = createStore (reducer, initialState);
  //
  // ReactDOM.render (//отрендерить/отрисовать
  //   <BrowserRouter>
  //     <App store={store} accessKey={accessToken}/>
  //   </BrowserRouter>
  //   ,
  //   document.querySelector("#root")
//   );
// }

