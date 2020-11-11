import React from "react";
import styles from "./cardList.css";
import {Card} from "./Card/Card";
import Loader from "../../img/3.svg"
import {CardPlaceholder} from "./CardPlaceholder/CardPlaceholder";

export const CardList = ({itemsArr, toAdd, toToggleLike}) => {
  let cardList;
  if (itemsArr.length ===0) {
    cardList=
      <>
        <div className={styles.loader}>
          <Loader/>
        </div>
        <CardPlaceholder/>
        <CardPlaceholder/>
        <CardPlaceholder/>
        <CardPlaceholder/>
        <CardPlaceholder/>
        <CardPlaceholder/>
      </>
  } else {
    cardList = itemsArr.map((item) => {
      return (
        <Card
          key={item.id}
          cardObj={item}
          toToggleLike={toToggleLike}
        />
      )
    })}

    return (
      <main className={styles.mainContainer}>
        <section className={styles.centralContainer}>
          <ul className={styles.cardList}>
            {cardList}
            {itemsArr.length !==0 && (
              <Card whoIs={"moreButton"} toAdd={toAdd}/>
            )}
          </ul>
        </section>
      </main>
    )
}



