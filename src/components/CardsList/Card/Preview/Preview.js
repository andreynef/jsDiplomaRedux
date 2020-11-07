import React from "react";
import styles from "./preview.css";
import {Link} from "react-router-dom";


export function Preview({cardObj, clickPreview}) {
  return (
    <Link to={'/cardpage'} className={styles.previewContainer} onClick={()=>clickPreview(cardObj)}>
      <img className={styles.previewImg}
           src={cardObj.urls.thumb}
           alt="previewPic"
      />
    </Link>
  );
}
