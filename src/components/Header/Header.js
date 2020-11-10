import React from "react";
import styles from "./header.css";
import {Link} from "react-router-dom";
import capitalizeFirstLetter from "../../functions/capitalizeFirstLetter";

export const Header = ({userProfile}) => {

  const toLogout = ()=> {
    localStorage.removeItem('accessToken');
    window.location.assign('https://jsdiploma.nef-an.ru');
  }

    return (
      <header className={styles.headerContainer}>
        <div className={styles.centralContainer}>
          <Link to={"/"} className={styles.logoContainer}>
            <img src={"https://www.flaticon.com/svg/static/icons/svg/1/1394.svg"} alt={"logo"}/>
          </Link>
          <div className={styles.userContainer}>
            <>
              <button className={styles.button} type="button" onClick={()=> toLogout()}>
                  <span className={styles.logoutText}>Logout</span>
              </button>
              <img
                className={styles.avatarImg}
                src={userProfile? userProfile.profile_image.small:'../img/cross.png'}
                alt="avatar"
              />
              <button className={styles.button} type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={userProfile ? userProfile.links.html : '#'}
                  className={styles.avatarText}
                >
                  {userProfile ? capitalizeFirstLetter(`${userProfile.first_name}`) : 'User'}
                </a>
              </button>
            </>
          </div>
        </div>
      </header>
    );
}





