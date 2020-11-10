import Unsplash, { toJson } from 'unsplash-js';

export const unsplash = new Unsplash({
  accessKey: "sQ_OK-FHQD1dS6L4h98HkNOr-HHHKRE8KuUPVf9BXAw",
  secret: "Eu_hWiHa3mUGcHyGtq2Idfj_gGCGYq6Jp0mv1ZL_kjA",
  callbackUrl: "https://jsdiploma.nef-an.ru/auth",
  // bearerToken: "1HW7FNACP1ZopVpb0MPbNIl-rQMN-NnbIiwjnhkqa3E",
  bearerToken: localStorage.getItem("accessToken"),
});

export const getAuthenticationUrl = ()=>{
    return unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
    ]);
}

export const setAccessToken = (codeFromUrl) => {
  unsplash.auth.userAuthentication(codeFromUrl)
    .then(toJson)
    .then(json => {
      localStorage.setItem("accessToken", JSON.stringify(json.access_token));//при ответе, записываем токен в локал
      window.location.assign('https://jsdiploma.nef-an.ru');// Перезагружаем гл страницу.-> новый рендер = нов проверка = эта ф больше не выполнится.
    })
}

export default unsplash;