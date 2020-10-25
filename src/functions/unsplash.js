// import Unsplash, {toJson} from 'unsplash-js';
//
//
//
//
// class Unsplash {
//   AMOUNT_ON_PAGE = 10;
//   INITIAL_PAGE = 100;
//   // bearerToken = localStorage.accessTokenForUnsplash;//берем из локала. Если нет то устанавливается на null.
//
//   unsplash = new Unsplash({//с ключом или без неважно. Будет использоваться только один unsplash без обновлений.
//     accessKey: 'sQ_OK-FHQD1dS6L4h98HkNOr-HHHKRE8KuUPVf9BXAw',// accesskey из настроек вашего приложения
//     secret: 'Eu_hWiHa3mUGcHyGtq2Idfj_gGCGYq6Jp0mv1ZL_kjA',// Application Secret из настроек вашего приложения
//     callbackUrl: 'https://jsdiploma.nef-an.ru/auth',// Полный адрес страницы авторизации приложения (Redirect URI). Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers
//     bearerToken: 'u9cltpdaekYTys_6i6twxgdnLT2W69GbEPQVMYollUg',//берем из локала. Если нет то устанавливается null.
//   });
//
//   getFirstTenPhotos = (images)=>{
//     if (images.length === 0) {//только когда список пуст.
//       unsplash.photos.listPhotos(page, AMOUNT_ON_PAGE, "latest")// метод из библиотеки https://github.com/unsplash/unsplash-js#photos. photos.listPhotos(page, perPage, orderBy)
//         .then(toJson)
//         .then(json => {//json это ответ в виде массива обьектов
//           // setImages([...json]);//установка нов стейта списка фоток (после этой ф).
//           return json
//         });
//     }
//   };
//
//   setWaterAmount(value) {
//     if (value < 0) throw new Error("Отрицательное количество воды");
//     this._waterAmount = value;
//   }
//
//   getWaterAmount() {
//     return this._waterAmount;
//   }
// }
//
// new CoffeeMachine().setWaterAmount(100);
//
//
//
//
//
// const Unsplash= (code) => {
//
// const unsplash = new Unsplash({//с ключом или без неважно. Будет использоваться только один unsplash без обновлений.
//     accessKey: 'sQ_OK-FHQD1dS6L4h98HkNOr-HHHKRE8KuUPVf9BXAw',// accesskey из настроек вашего приложения
//     secret: 'Eu_hWiHa3mUGcHyGtq2Idfj_gGCGYq6Jp0mv1ZL_kjA',// Application Secret из настроек вашего приложения
//     callbackUrl: 'https://jsdiploma.nef-an.ru/auth',// Полный адрес страницы авторизации приложения (Redirect URI). Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers
//     bearerToken: 'u9cltpdaekYTys_6i6twxgdnLT2W69GbEPQVMYollUg',//берем из локала. Если нет то устанавливается null.
//   });
//
//   const getBearerTokenFromUrlCode =()=> {
//     const codeFromUrl = window.location.search.split('code=')[1];// Считываем GET-параметр code из URL// www.example.com/toAuth?code=abcdef123456...
//
//     if (codeFromUrl) {//если код в строке есть.
//       unsplash.toAuth.userAuthentication(codeFromUrl)//отправляем запрос на получение токена
//         .then(toJson)
//         .then(json => {
//           setBearerTokenToLocalStorage(json.access_token);
//           // setBearerToken(json.access_token);
//           window.location.assign('https://jsdiploma.nef-an.ru');// Перезагружаем гл страницу.
//           // console.log('setBearerToken from getBearerTokenFromUrlCode is done');
//         })
//     }else{
//       console.log('getting code is skipped. codeFromUrl is:',codeFromUrl);//return false
//     }
//   }
//
//   const getUserProfile =()=> {
//     if (bearerToken) {//если в стейте есть ключ
//       unsplash.currentUser.profile()
//         .then(toJson)
//         .then(json => {// json обьект = {id: "Rc7GH-2FKsU", name: "andrey nefedyev", first_name: "andrey"}
//           setUserProfile(json);
//           setIsAuth(true);
//         });
//     }
//   };
//
//   const setBearerTokenToLocalStorage= (bearerToken) => {
//     localStorage.setItem('accessTokenForUnsplash', JSON.stringify(bearerToken));
//   };
//
//   const deleteAccessTokenFromLocalStorage= () => {
//     localStorage.removeItem('accessTokenForUnsplash');
//   };
//
//   const toLogout= () => {
//     setIsAuth(false);
//     deleteAccessTokenFromLocalStorage();
//   };
//
//   const goToAuthorizePage=()=>{
//     const authenticationUrl = unsplash.toAuth.getAuthenticationUrl([// Генерируем адрес страницы аутентификации на unsplash.com
//       "public",// и указываем требуемые разрешения (permissions)
//       "write_likes",
//     ]);
//     window.location.assign(authenticationUrl);// Отправляем пользователя на авторизацию сайта Unsplash а потом он пепенаправит пользователя на - callbackUrl: "https://jsdiploma.nef-an.ru/auth"
//   };
//
//   const getFirstTenPhotos = ()=>{
//     if (images.length === 0) {//только когда список пуст.
//       unsplash.photos.listPhotos(page, AMOUNT_ON_PAGE, "latest")// метод из библиотеки https://github.com/unsplash/unsplash-js#photos. photos.listPhotos(page, perPage, orderBy)
//         .then(toJson)
//         .then(json => {//json это ответ в виде массива обьектов
//           setImages([...json]);//установка нов стейта списка фоток (после этой ф).
//           console.log('getting 10 photos is done')
//         });
//     }
//   };
//
//   const addPhotos = () => {
//     unsplash.photos.listPhotos(page+1, AMOUNT_ON_PAGE, "latest")// метод из библиотеки https://github.com/unsplash/unsplash-js#photos. photos.listPhotos(page, perPage, orderBy)
//       .then(toJson)
//       .then(json => {//json это ответ в виде массива обьектов в количестве указанном в переменной amountOfItemsOnPage.
//         const newImagesArr = [...images, ...json];//создаем новый массив добавляя к старым новые фотки.
//         // const newCleanArr = [...new Set(newDirtyArr)];//избавляемся от дублирования элементов. ES6. Альтернатива Array.from(new Set (newDirtyArr))
//         // const newCleanArr2 = newDirtyArr.filter((item,index)=>newDirtyArr.indexOf(item===index));//способ 2 через filter
//         // const newCleanArr3 = newDirtyArr.reduce((unique,item)=>unique.includes((item) ? unique:[...unique, item], []));//способ 3 через reduce
//         setImages(newImagesArr);//обновляем стейт списка картинок.
//         setPage(page + 1);//сохраняем стейт последней запрашиваемой страницы.
//       });
//   };
//
//   const likePhotoRequest =(id)=> {
//     unsplash.photos.likePhoto(id)// метод из библиотеки https://github.com/unsplash/unsplash-js#photos
//       .then(toJson)
//       .then(json => {//json это ответ в виде одного обьекта {photo:{}, user:{}}
//         //ничего не делать чтобы не нагружать сервер лишними запросами на загрузку.
//       })
//   };
//
//   const unlikePhotoRequest =(id)=> {
//     unsplash.photos.unlikePhoto(id)// метод из библиотеки https://github.com/unsplash/unsplash-js#photos
//       .then(toJson)
//       .then(json => {//json это ответ в виде одного обьекта {photo:{}, user:{}}
//         //ничего не делать чтобы не нагружать сервер лишними запросами на загрузку.
//       })
//   };
//
//
//   return (
//   );
//
// }
//
//
//
// export default Unsplash;
