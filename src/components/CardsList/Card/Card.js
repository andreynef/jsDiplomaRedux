import React from "react";
import styles from "./card..css";
import {Controls} from "./Controls/Controls";
import {Metadata} from "./Metadata/Metadata";
import {Preview} from "./Preview/Preview";

export const Card = ({cardObj, uToggleLikeThunkAC, whoIs, uAddThunkAC, clickPreview, nextPage}) => {

  if (whoIs === "moreButton") {
    return (
      <div className={styles.card}>
        <div className={styles.loadMoreContainer} onClick={() => uAddThunkAC(nextPage)}>
          <span className={styles.loadMoreText}>Load more</span>
        </div>
      </div>
    )
  } else {

    return (
      <div className={styles.card}>
        <Metadata cardObj={cardObj}/>
        <Preview cardObj={cardObj} clickPreview={clickPreview}/>
        <Controls cardObj={cardObj} uToggleLikeThunkAC={uToggleLikeThunkAC}/>
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
//     uToggleLikeThunkAC: (id)=> dispatch(uToggleLikeThunkAC(id)),
//   }
// }
//
// Card = connect(mapStateToProps,mapDispatchToProps)(Card);//коннектим приложение к стору передав пропсы
//
// export default Card