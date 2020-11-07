import React, {useEffect, useState} from "react";
import "../main.global.css";
import {connect} from "react-redux";//это то, что позволит подключить этот компонент к хранилищу Redux.
import {clickLogoutAction, clickPreviewAction} from "../actions";
import {
  uAddThunkAC,
  uProfileThunkAC,
  uToggleLikeThunkAC
} from "../actions/unsplashThunkActionCreator";
import {Route, Switch} from "react-router-dom";
import {CardList} from "../components/CardsList/CardList";
import {Footer} from "../components/Footer/Footer";
import {CardPage} from "../components/CardPage/CardPage";
import {Header} from "../components/Header/Header";
import {NoPage} from "../components/NoPage/NoPage";

let App = ({itemsArr, userProfile, clickedObj, clickLogoutAction, clickPreviewAction, uAddThunkAC, uProfileThunkAC, uToggleLikeThunkAC, nextPage}) => {

  useEffect(()=>{
    uAddThunkAC();//-  componentDidMount  -  initial Render
    uProfileThunkAC();//-  componentDidMount  -  initial Render
  },[])

  return (
        <>
          <Header
            clickLogout={clickLogoutAction}
            userProfile={userProfile}
          />
          <Switch>
            <Route exact path={"/"}
               component={() =>
                 <CardList
                   uAddThunkAC={uAddThunkAC}
                   uToggleLikeThunkAC={uToggleLikeThunkAC}
                   itemsArr={itemsArr}
                   clickPreview={clickPreviewAction}
                   nextPage={nextPage}
                 />
               }
            />
            <Route exact path={"/404"}
               component={() =>
                 <NoPage/>
               }
            />
            <Route exact path={"/cardpage"}
               component={() =>
                 <CardPage
                   clickedObj={clickedObj}
                   uToggleLikeThunkAC={uToggleLikeThunkAC}
                   // clickClose={clickCloseAction}
                 />
               }
            />
          </Switch>
          <Footer/>
        </>
  )
};

const mapStateToProps = (state) => {//преобразование кучи стора (в данном случае обьект InitialState) в только необходимые пропсы. State = store.getState().
  return {//возврат обьекта с только необходимыми свойствами
    itemsArr: state.items,
    userProfile: state.userProfile,//в компонентах в пропсах приходит userProfile равное state.userProfile
    nextPage:state.nextPage,
    clickedObj:state.clickedObj,
  }
}
const mapDispatchToProps = (dispatch) => {//преобразование отправок действий в пропсы
  return {
    clickPreviewAction: (id) => dispatch(clickPreviewAction(id)),
    clickLogoutAction: ()=> dispatch(clickLogoutAction()),//метод в пропсах кот будет запускать dispatch в стор.
    uAddThunkAC: (page)=> dispatch(uAddThunkAC(page)),
    uProfileThunkAC: ()=> dispatch(uProfileThunkAC()),
    uToggleLikeThunkAC: (id)=> dispatch(uToggleLikeThunkAC(id)),
  }
}

App = connect(mapStateToProps,mapDispatchToProps)(App);//коннектим приложение к стору передав пропсы

export default App



  



























//   addToList() {
//     this.setState(prevState => ({
//         list: prevState.list.concat(this.state.text),
//         text: ""
//     }))
// }

// removeItem(item) {
//   const item = getItem(this.state.list, item.id) // Method to get item in list through comparison (IE: find some item with item.id), it has to return ITEM and INDEX in array
//   const newlist = [].concat(list) // Clone array with concat or slice(0)
//   newlist.splice(item.index, 1);
//   this.setState({list: newlist});       
// }
