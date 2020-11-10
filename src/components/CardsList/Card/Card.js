import React from "react";
import styles from "./card.css";
import HeartIconPressed from "../../../img/HeartIconPressed.svg";
import HeartIconUnpressed from "../../../img/HeartIconUnpressed.svg";
import {Link} from "react-router-dom";

export const Card = ({cardObj, toToggleLike, toAdd, whoIs}) => {

  if (whoIs === "moreButton") {
    console.log('in Card. moreButton');

    return (
      <div className={styles.card}>
        <button className={styles.loadMoreButton} onClick={() => toAdd()}>
          <span className={styles.loadMoreText}>Load more</span>
        </button>
      </div>
    )
  } else {
    console.log('in Card. Obj to render is: ',  cardObj);

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
          {cardObj.created_at.slice(0,10)}
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













//
// const mapStateToProps = (state) => {//state = store.getState().
//   return {
//     itemsArr: state.items,
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     uToggleLikeAC: (id)=> dispatch(uToggleLikeAC(id)),
//   }
// }
//
// Card = connect(mapStateToProps,mapDispatchToProps)(Card);//коннектим приложение к стору передав пропсы
//
// export default Card
