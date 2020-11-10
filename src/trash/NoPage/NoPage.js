import React from "react";
import styles from "./noPage.css";

export function NoPage() {

  return (
    <div className={styles.authContainer}>
      <img src={"https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg"} alt={"noPageFound"} className={styles.loader}/>
    </div>
  )
}
