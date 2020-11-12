import React, {useEffect} from "react";
import styles from "./auth.css";
import {getAuthenticationUrl, redirectForToken, setAccessToken} from "../../services/unsplash";
import loader from "../../img/Gear.gif";
import {getCodeFromUrl} from "../../services/getCodeFromUrl";

export function Auth() {

  const code = getCodeFromUrl();

  const toLogin=()=>{
    redirectForToken(getAuthenticationUrl());
  }

  useEffect(()=>{
    if (code) {
      setAccessToken(code);
    }
  },[])

  const loginBtn = (
    <button className={styles.button} onClick={()=> toLogin()}>
      login
    </button>
  )

  const progressEl = (
    <div className={styles.authTextContainer}>
      <img src={loader} alt={'loader'} className={styles.loader}/>
      <span className={styles.authText}>Authorizing...</span>
    </div>
  )


  return (
    <div className={styles.authContainer}>
      {code ? progressEl : loginBtn}
    </div>
  )
}

