import Unsplash, {toJson} from 'unsplash-js';
import localStorageSet from "./localStorageSet";


export default function toAuth() {
  const ACCESSKEY = 'Awhepytu0JPZujZW7f97BMriVV8gKVO9_i2cM82Z1YU';
  const SECRET = '6LfA1BzLZz3Z2_Co9uWJJB4_fkpZvXZAUCxdQEAHP5o';
  const CALLBACKURL = 'https://andreynef.github.io/16module_Redux_Diploma/auth';
  // const ACCESSKEY = 'sQ_OK-FHQD1dS6L4h98HkNOr-HHHKRE8KuUPVf9BXAw';
  // const SECRET = 'Eu_hWiHa3mUGcHyGtq2Idfj_gGCGYq6Jp0mv1ZL_kjA';
  // const CALLBACKURL = 'https://jsdiploma.nef-an.ru/auth';
  const unsplash = new Unsplash({
    accessKey: ACCESSKEY,
    secret: SECRET,
    callbackUrl: CALLBACKURL,
  });

  const codeFromUrl = window.location.search.split('code=')[1];// Считываем GET-параметр code из URL// https://jsdiploma.nef-an.ru/auth?code=aLR9T6HktO0FP4G5Z-FOFGUtAHIijhDx9tdzbiLp9sE
  if (!codeFromUrl) {//если кода в url строке нет, то процедура его генерации.
    alert('in !codeFromUrl');
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);
    window.location.assign(authenticationUrl);//перезагрузка(или переход?) на страницу auth с кодом. Прогон заново.
  }else{//иначе процедура получения токена.
    alert('in else');

    unsplash.auth.userAuthentication(codeFromUrl)//отправляем запрос на получение токена
      .then(toJson)
      .then(json => {
        localStorageSet('accessToken', JSON.stringify(json.access_token));
        window.location.assign('https://andreynef.github.io/16module_Redux_Diploma');// Перезагружаем гл страницу.
      })
  }
}
    

