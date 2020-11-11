import React, {useRef} from "react";
import styles from "./cardPage.css";
import HeartIconPressed from "../../img/HeartIconPressed.svg";
import HeartIconUnpressed from "../../img/HeartIconUnpressed.svg";
import ProgressiveImage from "react-progressive-graceful-image";
import formatDate from "../../functions/formatDate";
import useOnClickOutside from "../../functions/useOnClickOutside";

export const CardPage = ({clickedObj, toToggleLike}) => {

  const ref = useRef();
  useOnClickOutside(ref, () => window.history.go(-1));

  return (
      <div className={styles.cardPage}>
        <div ref={ref} className={styles.centralContainer}>{/*anchor ref here*/}
          <div className={styles.imageContainer}>
            <ProgressiveImage
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
              <span className={styles.createdAt}>{formatDate(clickedObj.created_at)}</span>
            </div>
            <div className={styles.likesContainer}>
              <button
                className={styles.button}
                onClick={()=>toToggleLike(clickedObj)}
              >
                <span className={styles.likesValue}>{clickedObj.likes}</span>
                <div className={styles.likesIcon}>{clickedObj.liked_by_user? <HeartIconPressed/> : <HeartIconUnpressed/>}</div>
              </button>
            </div>
          </div>
          <button to={'/'} className={styles.exitButton} onClick={()=>window.history.go(-1)}/>
        </div>
      </div>
    )
  }
