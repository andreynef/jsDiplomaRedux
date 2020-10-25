import React from 'react';
import styles from './auth.css';
import loader from "../../img/Gear.gif";
import toAuth from "../../functions/toAuth";

export function Auth() {
  alert('in component Auth -> toAuth()')
  toAuth();

  return (
    <div className={styles.authContainer}>
        <img src={loader} alt={'loader'} className={styles.loader}/>
        <div className={styles.authTextContainer}>
          <span className={styles.authText}>
            Authorizing...
          </span>
        </div>
    </div>
  )
}


// <>
//   {unsplash.users._bearerToken===null||undefined
//     ? <img src={loader} alt={'loader'} className={styles.loader}/>
//     : <span> You are authorized. Going back to homepage...</span>
//   }
// </>
