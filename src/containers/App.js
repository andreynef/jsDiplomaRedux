console.log('in App file')

import React, {useEffect} from "react";
import "../main.global.css";
import {Route, Switch} from "react-router-dom";
import {CardList} from "../components/CardsList/CardList";
import {Footer} from "../components/Footer/Footer";
import {CardPage} from "../components/CardPage/CardPage";
import {Header} from "../components/Header/Header";
import {NoPage} from "../components/NoPage/NoPage";
import {connect} from "react-redux";
import {uAddAC, uProfileAC, uToggleLikeAC} from "../actions";
import {Auth} from "../components/Auth/Auth";

let App = ({itemsArr, toAdd, userProfile, toProfile, toToggleLike}) => {

  useEffect(()=>{//можно переделать на "если пусто в строке то загрузка фоток иначе на авторизацию"
    toAdd();//-  componentDidMount
    toProfile();//-  componentDidMount
  },[])


  return (
    <>
      <Header
        userProfile={userProfile}
      />
      <Switch>
        <Route exact path={"/"}
               component={() =>
                 <CardList
                   toAdd={toAdd}
                   toToggleLike={toToggleLike}
                   itemsArr={itemsArr}
                 />
               }
        />
        <Route exact path={"/cardpage/:id"}//тот айди передается в Link в Card : <Link to={'/cardpage/:${id}'}
               render={(props) =>
                 <CardPage
                   toToggleLike={toToggleLike}
                   clickedObj={itemsArr.find(item => item.id === props.match.params.id)}//фильтр того айди из сущ списка. Роутер передает проп match.params
                 />
               }
        />
      </Switch>
      <Footer/>
      </>
  )
};

const mapStateToProps = (state) => {//преобразование кучи стора в только необходимые пропсы. State = store.getState().
  console.log('in mapStateToProps state:', state);
  return {//возврат обьекта с только необходимыми свойствами
    itemsArr: state.items,
    userProfile: state.userProfile,//в компонентах в пропсах приходит userProfile равное state.userProfile
  }
}
const mapDispatchToProps = (dispatch) => {//преобразование отправок действий в пропсы
  console.log('in mapDispatchToProps');
  return {
    toAdd: ()=> dispatch(uAddAC()),
    toProfile: ()=> dispatch(uProfileAC()),
    toToggleLike: (id)=> dispatch(uToggleLikeAC(id)),
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;


//было и работало

// import React, {useEffect, useState} from "react";
// import "../main.global.css";
// import {connect} from "react-redux";//это то, что позволит подключить этот компонент к хранилищу Redux.
// import {clickLogoutAction, clickPreviewAction} from "../actions";
// import {
//   uAddAC,
//   uProfileAC,
//   uToggleLikeAC
// } from "../actions/unsplashThunkActionCreator";
// import {Route, Switch} from "react-router-dom";
// import {CardList} from "../components/CardsList/CardList";
// import {Footer} from "../components/Footer/Footer";
// import {CardPage} from "../components/CardPage/CardPage";
// import {Header} from "../components/Header/Header";
// import {NoPage} from "../components/NoPage/NoPage";
//
// let App = ({itemsArr, userProfile, clickedObj, clickLogoutAction, clickPreviewAction, uAddAC, uProfileAC, uToggleLikeAC, nextPage}) => {
//
//   useEffect(()=>{
//     uAddAC();//-  componentDidMount  -  initial Render
//     uProfileAC();//-  componentDidMount  -  initial Render
//   },[])
//
//   return (
//     <>
//       <Header
//         clickLogout={clickLogoutAction}
//         userProfile={userProfile}
//       />
//       <Switch>
//         <Route exact path={"/"}
//                component={() =>
//                  <CardList
//                    uAddAC={uAddAC}
//                    uToggleLikeAC={uToggleLikeAC}
//                    itemsArr={itemsArr}
//                    clickPreview={clickPreviewAction}
//                    nextPage={nextPage}
//                  />
//                }
//         />
//         <Route exact path={"/404"}
//                component={() =>
//                  <NoPage/>
//                }
//         />
//         <Route exact path={"/cardpage"}
//                component={() =>
//                  <CardPage
//                    clickedObj={clickedObj}
//                    uToggleLikeAC={uToggleLikeAC}
//                    // clickClose={clickCloseAction}
//                  />
//                }
//         />
//       </Switch>
//       <Footer/>
//     </>
//   )
// };
//
// const mapStateToProps = (state) => {//преобразование кучи стора (в данном случае обьект InitialState) в только необходимые пропсы. State = store.getState().
//   return {//возврат обьекта с только необходимыми свойствами
//     itemsArr: state.items,
//     userProfile: state.userProfile,//в компонентах в пропсах приходит userProfile равное state.userProfile
//     nextPage:state.nextPage,
//     clickedObj:state.clickedObj,
//   }
// }
// const mapDispatchToProps = (dispatch) => {//преобразование отправок действий в пропсы
//   return {
//     clickPreviewAction: (id) => dispatch(clickPreviewAction(id)),
//     clickLogoutAction: ()=> dispatch(clickLogoutAction()),//метод в пропсах кот будет запускать dispatch в стор.
//     uAddAC: (page)=> dispatch(uAddAC(page)),
//     uProfileAC: ()=> dispatch(uProfileAC()),
//     uToggleLikeAC: (id)=> dispatch(uToggleLikeAC(id)),
//   }
// }
//
// App = connect(mapStateToProps,mapDispatchToProps)(App);//коннектим приложение к стору передав пропсы
//
// export default App









