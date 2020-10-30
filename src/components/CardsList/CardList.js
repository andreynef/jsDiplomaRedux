import React from 'react';
import styles from './cardList.css';
import {Card} from "./Card/Card";
import Loader from '../../../src/img/3.svg'
import {PlaceholderCard} from "./PlaceholderCard/PlaceholderCard";
import {CardPage} from "../CardPage/CardPage";

export function CardList({unsplashThunk,itemsArr,clickPreview,clickedObj,nextPage}) {

  let cardList;
  if (!itemsArr) {
    cardList=
      <>
        <div className={styles.loader}>
          <Loader/>
        </div>
        <PlaceholderCard/>
        <PlaceholderCard/>
        <PlaceholderCard/>
        <PlaceholderCard/>
        <PlaceholderCard/>
        <PlaceholderCard/>
      </>
  } else {
    cardList = itemsArr.map((item, i) => {
      return (
          <Card
            key={item.id}
            id={item.id}
            created={item.created_at}
            name={item.user.first_name}
            profile={item.user.links.html}
            likes={item.likes}
            url={item.urls.thumb}
            ava={item.user.profile_image.small}
            clickPreview={clickPreview}
            isLiked={item.liked_by_user}
            clickedObj={clickedObj}
            cardObj={item}
            unsplashThunk={unsplashThunk}
          />
      )
    })}

    return (
      <main className={styles.mainContainer}>
        <section className={styles.centralContainer}>
          <ul className={styles.cardList}>
            {cardList}
            {itemsArr && (
              <Card unsplashThunk={unsplashThunk} nextPage={nextPage} itemsArr={itemsArr} whoIs={'moreButton'}/>
            )}
          </ul>
        </section>
      </main>
    )
}
