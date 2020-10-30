import React from 'react';
import styles from './header.css';

export function Header({devBtn, clickLogout, userProfile}) {

  if (userProfile){//решение преждевременного рендера
    const userName=capitalizeFirstLetter(`${userProfile.first_name}`);

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
      <header className={styles.headerContainer}>
        <div className={styles.centralContainer}>
          <div className={styles.logoContainer}>
            <img src={'https://www.flaticon.com/svg/static/icons/svg/1/1394.svg'} alt={'logo'}/>
          </div>
          {/*{devBtn &&(*/}
          {/*  <button*/}
          {/*  type="button"*/}
          {/*  onClick={devBtn}*/}
          {/*  >*/}
          {/*  dev button (show states in console)*/}
          {/*  </button>*/}
          {/*)}*/}
          <div className={styles.userContainer}>
            <>
              <button className={styles.button} type="button" onClick={clickLogout}>
                <span className={styles.logoutText}>Logout</span>
              </button>
              <img
                className={styles.avatarImg}
                src={userProfile.profile_image.small}
                alt="avatar"
              />
              <button className={styles.button} type="button">
                <a target="_blank" rel="noopener noreferrer" href={userProfile.links.html} className={styles.avatarText} > {userName}</a>
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





