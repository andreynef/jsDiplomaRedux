import React from "react";
import styles from "./card.css";
import HeartIconPressed from "../../../img/HeartIconPressed.svg";
import HeartIconUnpressed from "../../../img/HeartIconUnpressed.svg";
import {Link} from "react-router-dom";
import formatDate from "../../../functions/formatDate";

export const Card = ({cardObj, toToggleLike, toAdd, whoIs}) => {

  if (whoIs === "moreButton") {

    return (
      <div className={styles.card}>
        <button className={styles.loadMoreButton} onClick={() => toAdd()}>
          <span className={styles.loadMoreText}>Load more</span>
        </button>
      </div>
    )
  } else {

    return (
      <div className={styles.card}>
  {/*meta*/}

        <div className={styles.metaContainer}>
          <div className={styles.metaData}>
            <a href={cardObj.user.links.html} className={styles.userLink}>
              <img
                className={styles.avatar}
                src={cardObj.user.profile_image.small}
                alt="avatar"
              />
              <span className={styles.userName}>{cardObj.user.first_name}</span>
            </a>
            <span className={styles.createdAt}>
          {formatDate(cardObj.created_at)}
        </span>
          </div>
        </div>

  {/*preview*/}

        <Link to={`/cardpage/${cardObj.id}`} className={styles.previewContainer}>
          <img className={styles.previewImg}
               src={cardObj.urls.thumb}
               alt="previewPic"
          />
        </Link>

  {/*controls*/}

        <div className={styles.controlsContainer}>
          <div className={styles.likesContainer}>
            <button
              className={styles.button}
              onClick={()=>toToggleLike(cardObj)}
            >
              <span className={styles.likesValue}>{cardObj.likes}</span>
              <div className={styles.likesIcon}>{cardObj.liked_by_user? <HeartIconPressed/> : <HeartIconUnpressed/>}</div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}


