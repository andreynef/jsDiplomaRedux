import React from "react";
import styles from "./cardList.css";
import {Card} from "./Card/Card";
import Loader from "../../../src/img/3.svg"
import {PlaceholderCard} from "./PlaceholderCard/PlaceholderCard";

export function CardList({uToggleLikeThunkAC,itemsArr, nextPage, uAddThunkAC, clickPreview}) {

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
            cardObj={item}
            clickPreview={clickPreview}
            uToggleLikeThunkAC={uToggleLikeThunkAC}
          />
      )
    })}

    return (
      <main className={styles.mainContainer}>
        <section className={styles.centralContainer}>
          <ul className={styles.cardList}>
            {cardList}
            {itemsArr.length!==0 && (
              <Card uAddThunkAC={uAddThunkAC} nextPage={nextPage} itemsArr={itemsArr} whoIs={"moreButton"}/>
            )}
          </ul>
        </section>
      </main>
    )
}
