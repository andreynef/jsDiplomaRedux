import React from 'react';
import styles from './card..css';
import {Controls} from "./Controls/Controls";
import {Info} from "./Info/Info";
import {Preview} from "./Preview/Preview";

export function Card({itemsArr, nextPage, url, cardObj, created, likes, profile, name, ava, description, id, clickPreview, isLiked, whoIs, unsplashThunk}) {

  return (
    <div className={styles.card}>
      {whoIs === 'moreButton'
        ?
        <div className={styles.loadMoreContainer} onClick={()=>unsplashThunk('listPhotos',nextPage)}>
          <span className={styles.loadMoreText}>Load more</span>
        </div>
        :
        <>
          <Info created={created} profile={profile} name={name} ava={ava} description={description}/>
          <Preview url={url} clickPreview={clickPreview} cardObj={cardObj}/>
          <Controls cardObj={cardObj} likes={likes} unsplashThunk={unsplashThunk} isLiked={isLiked} id={id}/>
        </>
        }
    </div>
  )
}
