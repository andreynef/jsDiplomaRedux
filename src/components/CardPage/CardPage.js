import React from "react";
import styles from "./cardPage.css";
import HeartIconPressed from "../../img/HeartIconPressed.svg";
import HeartIconUnpressed from "../../img/HeartIconUnpressed.svg";
import ProgressiveImage from "react-progressive-graceful-image";
import {Link} from "react-router-dom";
import formatDate from "../../functions/formatDate";

export const CardPage = ({clickedObj, toToggleLike}) => {

    return (
      <div className={styles.cardPage}>
        <div className={styles.centralContainer}>
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
          <Link to={'/'} className={styles.exitButton}/>
        </div>
      </div>
    )
  }
