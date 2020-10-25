import Unsplash, {toJson} from 'unsplash-js';
import localStorageSet from "./localStorageSet";


export default function toAuth(accessToken) {
  // const ACCESSKEY = 'Awhepytu0JPZujZW7f97BMriVV8gKVO9_i2cM82Z1YU';
  // const SECRET = '6LfA1BzLZz3Z2_Co9uWJJB4_fkpZvXZAUCxdQEAHP5o';
  // const CALLBACKURL = 'https://redux.nef-an.ru/auth';
  const accessKey = process.env.ACCESSKEY;//ключ прячем в рут (файл .env) + плагин dotenv-webpack в клиентской части конфиг файла. + gitignore. В create-react-app автомат.
  const secret = process.env.SECRET;
  const callbackUrl = process.env.CALLBACKURL;
  // const bearerToken = localStorage.accessTokenForUnsplash;//берем из локала. Если нет то устанавливается на null.

  const unsplash = new Unsplash({
    accessKey: accessKey,
    secret: secret,
    callbackUrl: callbackUrl,
  });

  const codeFromUrl = window.location.search.split('code=')[1];// Считываем код из URL

  if (!codeFromUrl) {//если его нет, то процедура его генерации.
    alert('in toAuth() in if !codeFromUrl');
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);
    window.location.assign(authenticationUrl);//перенос на страницу логина unsplash. После ввода логина он отправляет на callbackUrl с кодом.
  }

  if (accessToken){//если считан
    alert('in toauth, in else if accessToken -> return false');
    return false
  }else {//иначе процедура получения токена.
    alert('in toauth, in else -> setting local');

    unsplash.auth.userAuthentication(codeFromUrl)//отправляем запрос на получение токена
      .then(toJson)
      .then(json => {
        localStorageSet('accessToken', JSON.stringify(json.access_token));
        alert('in toauth, in else -> reload');
        window.location.assign('https://redux.nef-an.ru');// Перезагружаем гл страницу. Уже эта ф не нужна тк в index.js стоит проверка на наличие accessToken в локале. Если есть то это ф не сработает.
      })

  }
}
    

