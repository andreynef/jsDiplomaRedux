import React, {useEffect} from "react";
import styles from "./auth.css";
import {getAuthenticationUrl, goForToken, setAccessToken, unsplash} from "../../services/unsplash";
import loader from "../../img/Gear.gif";

export function Auth() {

  const codeFromUrl = window.location.search.split("code=")[1];// Считываем код из URL
  // const codeFromUrl = "zyKwtrmk_84YpjPBPyfgQbPDVd-4z2lXfC2YsnUi2oY";

  const toLogin=()=>{
    goForToken(getAuthenticationUrl());
  }

  useEffect(()=>{
    if (codeFromUrl) {
      setAccessToken(codeFromUrl);
    }
  },[])


  return (
    <div className={styles.authContainer}>
      {codeFromUrl && (
        <div className={styles.authTextContainer}>
            <div className={styles.authContainer}>
              <img src={loader} alt={'loader'} className={styles.loader}/>
              <p className={styles.authText}>
                Authorizing...
              </p>
            </div>
        </div>
      )}
      {!codeFromUrl && (
        <button className={styles.button} onClick={()=> toLogin()}>
          login
        </button>
      )}
    </div>
  )
}

