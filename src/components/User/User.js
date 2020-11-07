import React from "react";
import styles from "./user.css";

export function User({userProfile}) {
console.log(userProfile);
  return (
    <div className={styles.authContainer}>
        <img
          src={userProfile.profile_image.small}
          alt="avatar"
          style={{width:"30px", height:"30px"}}
        />
        <p className={styles.authText}>
          userLink is: {userProfile.links.html}
        </p>
        <p className={styles.authText}>
          name: {userProfile.name}
        </p>
        <p className={styles.authText}>
          id: {userProfile.id}
        </p>

    </div>
  )
}


// <>
//   {unsplash.users._bearerToken===null||undefined
//     ? <img src={loader} alt={"loader"} className={styles.loader}/>
//     : <span> You are authorized. Going back to homepage...</span>
//   }
// </>
