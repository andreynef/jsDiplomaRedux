import Unsplash, {toJson} from 'unsplash-js';
import {ACCESSKEY, SECRET, CALLBACKURL, HOMEPAGE} from "../constants"


export default function toAuth() {

  const codeFromUrl = window.location.search.split('code=')[1];// Считываем код из URL
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  // const accessToken = "PtShaxn0gdCA0zVYBUWvUSpfO_nr7WB93_mgRwJ4ITE";

  if (accessToken) {//если уже есть токен то выход из процедуры авторизации.
    return true
  }else if (codeFromUrl) {//если в строке есть код то это значит что идет процедура авторизации. Отправляем запрос на получение токена.
    const unsplash = new Unsplash({
      accessKey: ACCESSKEY,
      secret: SECRET,
      callbackUrl: CALLBACKURL,
    });
    unsplash.auth.userAuthentication(codeFromUrl)
      .then(toJson)
      .then(json => {
        localStorage.setItem('accessToken', JSON.stringify(json.access_token));//записываем токен в локал
        window.location.assign(HOMEPAGE);// Перезагружаем гл страницу.-> новый рендер = нов проверка = эта ф больше не понадобится.
      })
  }else{//в люб др случаях процедура логина на сайте Unsplash. = генерации URL кода (После ввода логина сайт отправляет на callbackUrl с кодом)
    const unsplash = new Unsplash({
      accessKey: ACCESSKEY,
      secret: SECRET,
      callbackUrl: CALLBACKURL,
    });
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);
    window.location.assign(authenticationUrl);
  }
}
    

