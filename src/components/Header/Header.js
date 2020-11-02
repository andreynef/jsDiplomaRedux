import React from 'react';
import styles from './header.css';
import {Link} from "react-router-dom";
import capitalizeFirstLetter from "../../functions/capitalizeFirstLetter";

export function Header({devBtn, clickLogout, userProfile}) {

  if (userProfile){//решение преждевременного рендера

    return (
      <header className={styles.headerContainer}>
        <div className={styles.centralContainer}>
          <div className={styles.logoContainer}>
            <img src={'https://www.flaticon.com/svg/static/icons/svg/1/1394.svg'} alt={'logo'}/>
          </div>
            <Link to={'/user'} style={{textDecoration:'none'}}>
              userRoute
            </Link>
            <Link to={'/404'} style={{textDecoration:'none'}}>
              404Route
            </Link>
            <Link to={'/auth'} style={{textDecoration:'none'}}>
              AuthRoute
            </Link>
          <div className={styles.userContainer}>
            <>
              <button className={styles.button} type="button" onClick={clickLogout}>
                <span className={styles.logoutText}>
                  Logout
                </span>
              </button>
              <img
                className={styles.avatarImg}
                src={userProfile.profile_image.small}
                alt="avatar"
              />
              <button className={styles.button} type="button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={userProfile.links.html}
                  className={styles.avatarText}
                >
                  {capitalizeFirstLetter(`${userProfile.first_name}`)}
                </a>
              </button>
            </>
          </div>
        </div>
      </header>
    );
  }else{
    return false
  }
}





