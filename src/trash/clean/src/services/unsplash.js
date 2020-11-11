import Unsplash, { toJson } from 'unsplash-js';

export const unsplash = new Unsplash({
  accessKey: "sQ_OK-FHQD1dS6L4h98HkNOr-HHHKRE8KuUPVf9BXAw",
  secret: "Eu_hWiHa3mUGcHyGtq2Idfj_gGCGYq6Jp0mv1ZL_kjA",
  callbackUrl: "https://jsdiploma.nef-an.ru/auth",
  bearerToken: localStorage.getItem("accessToken"),
});

export const getAuthenticationUrl = ()=>{
    return unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
    ]);
}

export const goForToken = (authenticationUrl)=>{
  location.assign(authenticationUrl);
}

export const setAccessToken = (codeFromUrl) => {
  unsplash.auth.userAuthentication(codeFromUrl)
    .then(toJson)
    .then(json => {
      localStorage.setItem("accessToken", json.access_token);
      window.location.assign('https://jsdiploma.nef-an.ru/');
    })
}

export default unsplash;