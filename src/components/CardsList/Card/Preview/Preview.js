import React from 'react';
import styles from './preview.css';
import {Link} from "react-router-dom";


export function Preview({url, clickPreview, cardObj}) {
  return (
    <button className={styles.previewContainerButton} onClick={()=>clickPreview(cardObj)}>
      <img className={styles.previewImg}
           src={url}
           alt='previewPic'
      />
    </button>
  );
}
