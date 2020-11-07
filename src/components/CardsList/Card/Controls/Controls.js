import React, {useEffect, useState} from "react";
import styles from "./controls.css";
import HeartIconUnpressed from "../../../../img/HeartIconUnpressed.svg";
import HeartIconPressed from "../../../../img/HeartIconPressed.svg";

export const Controls = ({cardObj, uToggleLikeThunkAC}) => {

  // const [localIsLiked, setLocalIsLiked] = useState(isLiked);//первоначальное состояние лайка после глобального рендера
  // const [localLikes, setLocalLikes] = useState(likes);//первоначальное состояние лайков после глобального рендера

  // const handlePress=()=>{//запросы реальные а отображение только локальное. - Решение проблемы перерендера всего списка из-за одного частного клика.
  //   if (localIsLiked){
  //     unsplashThunk("unlike",id)
  //     setLocalIsLiked(!localIsLiked)
  //     setLocalLikes(localLikes-1)
  //   }else{
  //     unsplashThunk("like",id)
  //     setLocalIsLiked(!localIsLiked)
  //     setLocalLikes(localLikes+1)
  //   }
  // }

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.likesContainer}>
        <button
          className={styles.button}
          onClick={()=>uToggleLikeThunkAC(cardObj)}
        >
          <span className={styles.likesValue}>{cardObj.likes}</span>
          <div className={styles.likesIcon}>{cardObj.liked_by_user? <HeartIconPressed/> : <HeartIconUnpressed/>}</div>
        </button>
      </div>
    </div>
  );
}


