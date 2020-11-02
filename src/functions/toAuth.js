import {HOMEPAGE} from "../constants";
import unsplash from "../actions/unsplashThunkActionCreator";


export default function toAuth() {

  const codeFromUrl = window.location.search.split('code=')[1];// Считываем код из URL

  if (codeFromUrl) {//если в строке есть код то это значит что идет процедура авторизации. Отправляем запрос на получение токена.
    unsplash.auth.userAuthentication(codeFromUrl)
      .then(toJson)
      .then(json => {
        localStorage.setItem('accessToken', JSON.stringify(json.access_token));//записываем токен в локал
        window.location.assign(HOMEPAGE);// Перезагружаем гл страницу.-> новый рендер = нов проверка = эта ф больше не понадобится.
      })
  }else{//в люб др случаях процедура логина на сайте Unsplash. = генерации URL кода (После ввода логина сайт отправляет на callbackUrl с кодом)
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);
    window.location.assign(authenticationUrl);
  }
}
    

