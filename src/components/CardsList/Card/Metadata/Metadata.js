import React from "react";
import styles from "./metadata.css";

export function Metadata({cardObj}) {
  // const time = created.slice(11,15);
  // const formattedDate = [date, time].join("/")

  return (
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
  );
}
