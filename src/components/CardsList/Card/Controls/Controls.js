import React, {useEffect, useState} from "react";
import styles from './controls.css';
import HeartIconUnpressed from "../../../../img/HeartIconUnpressed.svg";
import HeartIconPressed from "../../../../img/HeartIconPressed.svg";
// import { useSelector } from "react-redux";
// import { selectLikeNumber, selectLikeBool } from "../../../../selectors";

export const Controls = ({likes,id,isLiked, unsplashThunk}) => {
  // const likeNumber = useSelector(selectLikeNumber);
  // const likeBool = useSelector(selectLikeBool);
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);//первоначальное состояние лайка после глобального рендера
  const [localLikes, setLocalLikes] = useState(likes);//первоначальное состояние лайков после глобального рендера

  const handlePress=()=>{//запросы реальные а отображение только локальное. - Решение проблемы перерендера всего списка из-за одного частного клика.
    if (localIsLiked){
      unsplashThunk('unlike',id)
      setLocalIsLiked(!localIsLiked)
      setLocalLikes(localLikes-1)
    }else{
      unsplashThunk('like',id)
      setLocalIsLiked(!localIsLiked)
      setLocalLikes(localLikes+1)
    }
  }


  return (
    <div className={styles.controlsContainer}>
      <div className={styles.likesContainer}>
        <button
          className={styles.button}
          onClick={handlePress}
        >
          <span className={styles.likesValue}>{localLikes}</span>
          <div className={styles.likesIcon}>{localIsLiked? <HeartIconPressed/> : <HeartIconUnpressed/>}</div>
        </button>
      </div>
    </div>
  );
}


