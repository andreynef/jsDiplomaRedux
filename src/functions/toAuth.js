import Unsplash, {toJson} from 'unsplash-js';
import localStorageSet from "./localStorageSet";
import {ACCESSKEY, SECRET, CALLBACKURL} from "../constants"


export default function toAuth(accessToken) {
  // const ACCESSKEY= 'Awhepytu0JPZujZW7f97BMriVV8gKVO9_i2cM82Z1YU';
  // const SECRET = '6LfA1BzLZz3Z2_Co9uWJJB4_fkpZvXZAUCxdQEAHP5o';
  // const CALLBACKURL = 'https://redux.nef-an.ru/auth';
  // const bearerToken = localStorage.accessTokenForUnsplash;//берем из локала. Если нет то устанавливается на null.
  alert('in toAuth() import ACCESSKEY:', ACCESSKEY);

  const unsplash = new Unsplash({
    accessKey: ACCESSKEY,
    secret: SECRET,
    callbackUrl: CALLBACKURL,
  });

  const codeFromUrl = window.location.search.split('code=')[1];// Считываем код из URL

  if (codeFromUrl) {//если он есть, то отправляем запрос на получение токена.
    alert('toauth(), codeFromUrl yes -> getting token and setting to local');

    unsplash.auth.userAuthentication(codeFromUrl)//
      .then(toJson)
      .then(json => {
        localStorageSet('accessToken', JSON.stringify(json.access_token));
        alert('reload');
        window.location.assign('https://redux.nef-an.ru');// Перезагружаем гл страницу. Уже эта ф не нужна тк в index.js стоит проверка на наличие accessToken в локале. Если есть то это ф не сработает.
      })
  }else {//если кода нет, то процедура его генерации
    alert('toAuth() no url ');
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);
    window.location.assign(authenticationUrl);//перенос на страницу логина unsplash. После ввода логина он отправляет на callbackUrl с кодом.
  }
}
    

