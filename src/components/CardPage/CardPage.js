import React, {useRef, useState} from 'react';
import styles from './cardPage.css';
import HeartIconPressed from "../../img/HeartIconPressed.svg";
import HeartIconUnpressed from "../../img/HeartIconUnpressed.svg";
import ProgressiveImage from "react-progressive-graceful-image";
import useOnClickOutside from '../../hooks/useOnClickOutside'

export function CardPage({unsplashThunk, clickedObj, clickClose}) {

  const ref = useRef();
  useOnClickOutside(ref, () => clickClose());

  const date = clickedObj.created_at.slice(0,10);//срезать лишние цифры из даты

  //localState -решение проблемы перерендера всего списка из-за одного частного клика/изменения.
  const [localIsLiked, setLocalIsLiked] = useState(clickedObj.liked_by_user);//первоначальное состояние лайка после глобального рендера
  const [localLikes, setLocalLikes] = useState(clickedObj.likes);//первоначальное состояние лайков после глобального рендера
  const handlePress=()=>{//запросы реальные а отображение только локальное. -
    if (localIsLiked){
      unsplashThunk('unlike',clickedObj.id)
      setLocalIsLiked(!localIsLiked)
      setLocalLikes(localLikes-1)
    }else{
      unsplashThunk('like',clickedObj.id)
      setLocalIsLiked(!localIsLiked)
      setLocalLikes(localLikes+1)
    }
  }

  return (
    <>
        <div className={styles.cardPage}>
          <div ref={ref} className={styles.centralContainer}>{/* ref anchor - outside click of this container*/}
              <div className={styles.imageContainer}>
                <ProgressiveImage//загрузчик из https://www.npmjs.com/package/react-progressive-graceful-image
                  src={clickedObj.urls.regular}
                  placeholder={clickedObj.urls.thumb}
                >
                  {src => <img src={src} alt={clickedObj.alt_description} />}
                </ProgressiveImage>
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.metaContainer}>
                  <div className={styles.authorContainer}>
                    <img
                      className={styles.avatarImg}
                      src={clickedObj.user.profile_image.small}
                      alt="avatar"
                    />
                    <a className={styles.avatarText} href={clickedObj.user.links.html}>{clickedObj.user.first_name}</a>
                  </div>
                  <span className={styles.createdAt}>{date}</span>
                </div>
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
            <button className={styles.exitButton} onClick={()=>clickClose()} />
          </div>
      </div>
    </>
  )
}
