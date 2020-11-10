import React, {useEffect} from "react";
import "../main.global.css";
import {Route, Switch} from "react-router-dom";
import {CardList} from "../components/CardsList/CardList";
import {Footer} from "../components/Footer/Footer";
import {CardPage} from "../components/CardPage/CardPage";
import {Header} from "../components/Header/Header";
import {connect} from "react-redux";
import {uAddAC, uProfileAC, uToggleLikeAC} from "../actions";

let App = ({itemsArr, toAdd, userProfile, toProfile, toToggleLike}) => {

  useEffect(()=>{
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

const mapStateToProps = (state) => {
  return {
    itemsArr: state.items,
    userProfile: state.userProfile,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toAdd: ()=> dispatch(uAddAC()),
    toProfile: ()=> dispatch(uProfileAC()),
    toToggleLike: (id)=> dispatch(uToggleLikeAC(id)),
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
