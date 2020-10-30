//Unsplash related file only

// По умолчанию action creators в Redux не поддерживают асинхронные действия. Решение - Redux Thunk. Thunk позволяет писать создатели действий, которые возвращают функцию вместо самого обьекта действия.

import Unsplash, {toJson} from "unsplash-js";
import {ACCESSKEY, CALLBACKURL, SECRET, AMOUNT_ON_PAGE, INITIAL_PAGE} from "../constants";
import {
	uProfileSuccessAction,
	uLikeSuccessAction,
	uUnlikeSuccessAction,
	uListPhotosSuccessAction,
} from "./index";


export const unsplashThunkActionCreator = (keyStr,arg2) => {//ф создающая запрос в Unsplash. 3 кастомных аргумента передаются из компонентов.

	const unsplash = new Unsplash({
		accessKey: ACCESSKEY,
		secret: SECRET,
		callbackUrl: CALLBACKURL,
		bearerToken: "AFaBKCHAaRKIVtFmrXxyflnwHn69VaTqdU70ErSmtw4",// localStorage.getItem('accessToken'),
	});

	switch (keyStr) {

		case 'listPhotos':
			const page = arg2 ? arg2 : INITIAL_PAGE;
			return (dispatch) => {
				unsplash.photos.listPhotos(page, AMOUNT_ON_PAGE, "latest")
					.then(toJson)
					.then(json => {//arr
						return dispatch(uListPhotosSuccessAction(json))//когда вернется ответ с сервера тогда запустить команду отправки действия кот необходима для Redux.
					});
			};

		case 'profile':
			return (dispatch) => {
				unsplash.currentUser.profile()
					.then(toJson)
					.then(json => {//obj
						return dispatch(uProfileSuccessAction(json))
					});
			};

		case 'like':
			return (dispatch) => {
				unsplash.photos.likePhoto(arg2)
					.then(toJson)
					.then(json => {//obj
						return dispatch(uLikeSuccessAction(json))
					});
			};

		case 'unlike':
			return (dispatch) => {
				unsplash.photos.unlikePhoto(arg2)
					.then(toJson)
					.then(json => {//obj
						return dispatch(uUnlikeSuccessAction(json))
					});
			};
	}
}












// оригинал примера
// export function itemsFetchDataSuccess(json) {
// 	return {
// 		type: 'ITEMS_FETCH_DATA_SUCCESS',
// 		json
// 	};
// }

// export function itemsFetchData(url) {
// 	return (dispatch) => {
// 		dispatch(itemsIsLoading(true));
//
// 		fetch(url)
// 			.then((response) => {
// 				if (!response.ok) {
// 					throw Error(response.statusText);
// 				}
//
// 				dispatch(itemsIsLoading(false));
//
// 				return response;
// 			})
// 			.then((response) => response.json())
// 			.then((items) => dispatch(itemsFetchDataSuccess(items)))
// 			.catch(() => dispatch(itemsHasErrored(true)));
// 	};
// }
