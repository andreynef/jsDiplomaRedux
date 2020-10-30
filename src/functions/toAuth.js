import Unsplash, {toJson} from 'unsplash-js';
import {ACCESSKEY, SECRET, CALLBACKURL, HOMEPAGE} from "../constants"


export default function toAuth() {

  const codeFromUrl = window.location.search.split('code=')[1];// Считываем код из URL
  const unsplash = new Unsplash({
    accessKey: ACCESSKEY,
    secret: SECRET,
    callbackUrl: CALLBACKURL,
  });

  if (codeFromUrl) {//если он есть, то отправляем запрос на получение токена.
    alert('toauth(), codeFromUrl yes -> getting token and setting to local');

    unsplash.auth.userAuthentication(codeFromUrl)
      .then(toJson)
      .then(json => {
        localStorage.setItem('accessToken', JSON.stringify(json.access_token));
        window.location.assign(HOMEPAGE);// Перезагружаем гл страницу.-> новый рендер = нов проверка = эта ф больше не понадобится.
      })
  }else {//если кода нет, то процедура его генерации
    alert('toAuth() no url ');
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);
    window.location.assign(authenticationUrl);//перенос на страницу логина unsplash (https://unsplash.com/oauth/login). После ввода логина он отправляет на callbackUrl с кодом.
  }
}
    

