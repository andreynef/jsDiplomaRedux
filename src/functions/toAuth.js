import Unsplash, {toJson} from "unsplash-js";
import {ACCESSKEY, SECRET, CALLBACKURL, HOMEPAGE} from "../constants/unsplash"


export default function toAuth() {

  const codeFromUrl = window.location.search.split("code=")[1];// Считываем код из URL
  const unsplash = new Unsplash({
    accessKey: ACCESSKEY,
    secret: SECRET,
    callbackUrl: CALLBACKURL,
  });

  if (codeFromUrl) {//если в строке есть код то значит идет процедура авторизации. Отправляем запрос на получение токена.
    unsplash.auth.userAuthentication(codeFromUrl)
      .then(toJson)
      .then(json => {
        localStorage.setItem("accessToken", JSON.stringify(json.access_token));//при ответе, записываем токен в локал
        window.location.assign(HOMEPAGE);// Перезагружаем гл страницу.-> новый рендер = нов проверка = эта ф больше не выполнится.
      })
  }else{//если кода нет то процедура логина на сайте Unsplash. = генерации URL кода (После ввода логина сайт отправляет на callbackUrl с кодом)
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);
    window.location.assign(authenticationUrl);
  }
}
    

