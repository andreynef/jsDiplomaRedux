import React from "react";
import styles from "./header.css";
import {Link} from "react-router-dom";
import capitalizeFirstLetter from "../../functions/capitalizeFirstLetter";

export function Header({userProfile}) {

  const toLogout = ()=> {
    sessionStorage.removeItem('accessToken');
    // window.location.assign('http://localhost:8080/');
    window.location.assign('https://jsdiploma.nef-an.ru');
  }

    return (
      <header className={styles.headerContainer}>
        <div className={styles.centralContainer}>
          <Link to={"/"} className={styles.logoContainer}>
            <img src={"https://www.flaticon.com/svg/static/icons/svg/1/1394.svg"} alt={"logo"}/>
          </Link>
          <div className={styles.userContainer}>
            {userProfile &&(
              <>
                <button className={styles.button} type="button" onClick={()=> toLogout()}>
                  <span className={styles.logoutText}>Logout</span>
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
            )}
          </div>
        </div>
      </header>
    );
}


//Если нужно получать данные из хранилища, можно преобразовать обычный компонент в компонент-контейнер, обернув его в компонент высшего порядка, возвращаемый функцией connect() из react-redux. :

// function ProfileContainer(props) {
//   return (
//     props.loggedIn
//       ? <Profile profile={props.profile} />
//       : <div>Please login to view profile.</div>
//   )
// }
//
// const mapStateToProps = function(state) {
//   return {
//     profile: state.user.profile,
//     loggedIn: state.auth.loggedIn
//   }
// }
//
// export default connect(mapStateToProps)(ProfileContainer);

