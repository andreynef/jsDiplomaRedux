import React, {useEffect, useState} from 'react';
import '../main.global.css';
import {connect} from 'react-redux';//это то, что позволит подключить этот компонент к хранилищу Redux.
import {clickCloseAction, clickLogoutAction, clickPreviewAction} from '../actions';
import {unsplashThunkActionCreator} from "../actions/unsplashThunkActionCreator";
import {Route, Switch} from "react-router-dom";
import {CardList} from "../components/CardsList/CardList";
import {Footer} from "../components/Footer/Footer";
import {CardPage} from "../components/CardPage/CardPage";
import {Header} from "../components/Header/Header";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

let App = ({itemsArr, userProfile, nextPage, isCardOpened, clickedObj, clickPreview, clickLogout, clickClose, unsplashThunk}) => {

  const toggleScroll = ()=>{
    if(isCardOpened){
      disablePageScroll();
    }else{
      enablePageScroll();
    }
  }

  useEffect(()=>{
    unsplashThunk('profile');//(keyStr,arg2?,arg3?)  -  initial Render
    unsplashThunk('listPhotos');//(keyStr,arg2?,arg3?)  -  initial Render
  },[])

  useEffect(() => {
    toggleScroll();
  }, [isCardOpened]);//is isCardOpened changed? -> disablePageScroll/enablePageScroll.

  return (
    <>
      <Header
        clickLogout={clickLogout}
        userProfile={userProfile}
      />
      <Switch>{/*рендерится в зависимости от Route path*/}
        <Route exact path={'/'}
           component={() =>
             <CardList
               unsplashThunk={unsplashThunk}
               itemsArr={itemsArr}
               clickPreview={clickPreview}
               nextPage={nextPage}
               clickedObj={clickedObj}
             />
           }
        />
      </Switch>

      {isCardOpened &&(
        <CardPage
          clickedObj={clickedObj}
          unsplashThunk={unsplashThunk}
          clickClose={clickClose}
        />
      )}
      {!isCardOpened &&(
        <Footer/>
      )}
    </>

)
};

const mapStateToProps = (state) => {//преобразование кучи стора (в данном случае обьект InitialState) в только необходимые пропсы. State = store.getState().
  return {//возврат обьекта с только необходимыми свойствами
    itemsArr: state.items,
    userProfile: state.userProfile,//в компонентах в пропсах приходит userProfile равное state.userProfile
    nextPage:state.nextPage,
    isCardOpened:state.isCardOpened,
    clickedObj:state.clickedObj,
  }
}
const mapDispatchToProps = (dispatch) => {//преобразование отправок действий в пропсы
  return {
    clickPreview: (id) => dispatch(clickPreviewAction(id)),// (id)=>{dispatch(obj)}
    clickLogout: ()=> dispatch(clickLogoutAction()),//метод в пропсах кот будет запускать dispatch в стор.
    clickClose: ()=> dispatch(clickCloseAction()),//метод в пропсах кот будет запускать dispatch в стор.
    unsplashThunk: (keyStr, arg2, arg3)=> dispatch(unsplashThunkActionCreator(keyStr, arg2, arg3)),
  }
}

App = connect(mapStateToProps,mapDispatchToProps)(App);//коннектим приложение к стору передав пропсы

export default App



  



























//   addToList() {
//     this.setState(prevState => ({
//         list: prevState.list.concat(this.state.text),
//         text: ''
//     }))
// }

// removeItem(item) {
//   const item = getItem(this.state.list, item.id) // Method to get item in list through comparison (IE: find some item with item.id), it has to return ITEM and INDEX in array
//   const newlist = [].concat(list) // Clone array with concat or slice(0)
//   newlist.splice(item.index, 1);
//   this.setState({list: newlist});       
// }
