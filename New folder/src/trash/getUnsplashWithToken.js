// import {toJson} from "unsplash-js";
// import getUnsplash from './getUnsplash';

// export default function getUnsplashWithToken() {//вернуть unsplash с кодом
  // const unsplash = getUnsplash();
  // console.log('in getUnsplashWithToken. Unsplash is: ', unsplash)

  // const codeFromUrl = window.location.search.split("code=")[1];// Считываем код из URL
  // const token = getToken();
  // if (codeFromUrl) {//ситуация когда в строке есть код
  //   console.log('in if codeFromURL')

  //   unsplash.auth.userAuthentication(codeFromUrl)
  //     .then(toJson)
  //     .then(json => {
  //       sessionStorage.setItem(TOKEN_STORAGE, json.access_token);//при ответе, записываем токен в локал
  //       unsplash.auth.setBearerToken(json.access_token);//и записываем в unsplash
  //     })
  //     .catch(error => console.error(error));
  //   return unsplash;
  // }

  // if (token) {//ситуация когда код уже есть в локале
  //   unsplash.auth.setBearerToken(json.access_token);//записываем сущ токен в unsplash
  //   console.log('in if token. new unsplash is: ', unsplash)
  //   return unsplash;
  // }
  // console.log('unsplash is:', unsplash)
// }

// import Unsplash, {toJson} from "unsplash-js";
// import {ACCESSKEY, SECRET, CALLBACKURL, HOMEPAGE} from "../constants/unsplash"

// export default function toAuth() {
//
//   const codeFromUrl = window.location.search.split("code=")[1];// Считываем код из URL
//   const unsplash = new Unsplash({
//     accessKey: ACCESSKEY,
//     secret: SECRET,
//     callbackUrl: CALLBACKURL,
//   });
//
//   if (codeFromUrl) {//если в строке есть код то значит идет процедура авторизации. Отправляем запрос на получение токена.
//     unsplash.auth.userAuthentication(codeFromUrl)
//       .then(toJson)
//       .then(json => {
//         localStorage.setItem("accessToken", JSON.stringify(json.access_token));//при ответе, записываем токен в локал
//         window.location.assign(HOMEPAGE);// Перезагружаем гл страницу.-> новый рендер = нов проверка = эта ф больше не выполнится.
//       })
//   }else{//если кода нет то процедура логина на сайте Unsplash. = генерации URL кода (После ввода логина сайт отправляет на callbackUrl с кодом)
//     const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//       "public",
//       "write_likes",
//     ]);
//     window.location.assign(authenticationUrl);
//   }
// }