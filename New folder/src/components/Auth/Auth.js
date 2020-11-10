import React, {useEffect} from "react";
import styles from "./auth.css";
import {getAuthenticationUrl, setAccessToken} from "../../functions/unsplash";
import loader from "../../img/Gear.gif";

export function Auth() {

  const codeFromUrl = window.location.search.split("code=")[1];

  const toLogin=()=>{
    setAccessToken(getAuthenticationUrl());
  }

  useEffect(()=>{
    if (codeFromUrl) {
      setAccessToken();
    }
  },[])


  return (
    <div className={styles.authContainer}>
        <div className={styles.authTextContainer}>
          {codeFromUrl && (
            <>
              <img src={loader} alt={'loader'} className={styles.loader}/>
              <span className={styles.authText}>
                Authorizing...
              </span>
            </>
          )}
          {!codeFromUrl && (
            <button className={styles.button} onClick={()=> toLogin()}>
            login
            </button>
          )}
        </div>
    </div>
  )
}

