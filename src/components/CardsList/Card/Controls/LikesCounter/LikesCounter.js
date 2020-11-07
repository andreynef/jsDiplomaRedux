import React from "react";
import styles from "./likesCounter.css";
import HeartIconUnpressed from "../../../../../img/HeartIconUnpressed.svg";

export function LikesCounter({likes, pressed, setLikedId, likePhoto, id}) {



  return (
    <div className={styles.likesCounter}>
      <span className={styles.likesValue}>{likes}</span>
      <button className={styles.button} onClick={()=>likePhoto(id)}>
        <img src={HeartIconUnpressed} alt={"heart"}/>
      </button>
    </div>
  );
}
