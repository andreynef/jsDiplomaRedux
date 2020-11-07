//Unsplash related file only

// По умолчанию action creators в Redux не поддерживают асинхронные действия. Решение - Redux Thunk. Thunk позволяет писать создатели действий, которые возвращают функцию вместо самого обьекта действия.

import Unsplash, {toJson} from "unsplash-js";
import {ACCESSKEY, CALLBACKURL, SECRET, AMOUNT_ON_PAGE, INITIAL_PAGE, BEARER_TOKEN} from "../constants/unsplash";
import {
	uProfileSuccessAction,//action готовый принять json ответ
	uToggleLikeSuccessAction,//action готовый принять json ответ
	uAddSuccessAction,//action готовый принять json ответ
	isLoadingAction,
} from "./index";

const unsplash = new Unsplash({
	accessKey: ACCESSKEY,
	secret: SECRET,
	callbackUrl: CALLBACKURL,
	bearerToken: BEARER_TOKEN,
});

export const uAddThunkAC = (page) => {//ф создающая запрос в Unsplash.

	return dispatch => {
		// dispatch(isLoadingAction(true));//вкл статус лоадинг
		unsplash.photos.listPhotos(page, AMOUNT_ON_PAGE, "latest")
			.then(toJson)
			.then(json => {//arr ответ
				// dispatch(isLoadingAction(false));//выкл статус лоадинг
				dispatch(uAddSuccessAction(json))//отправка действия dispatch кот необходима для Redux.
			})
			// .catch(() => dispatch(itemsHasErrored(true)));
	}
}

export const uProfileThunkAC = () => {
	return dispatch => {
		// dispatch(isLoadingAction(true));

		unsplash.currentUser.profile()
			.then(toJson)
			.then(json => {//obj ответ
				// dispatch(isLoadingAction(false));
				dispatch(uProfileSuccessAction(json))
			})
			// .catch(() => dispatch(itemsHasErrored(true)));
	}
}

export const uToggleLikeThunkAC = (obj) => {
	console.log('in uToggleLikeThunkAC', obj)

	return dispatch => {

		if (obj.liked_by_user){
			unsplash.photos.unlikePhoto(obj.id)
				.then(toJson)
				.then(json => {//obj ответ
					dispatch(uToggleLikeSuccessAction(json))
				})
			// .catch(() => dispatch(itemsHasErrored(true)));
		}else{
			unsplash.photos.likePhoto(obj.id)
				.then(toJson)
				.then(json => {//obj ответ
					dispatch(uToggleLikeSuccessAction(json))
				})
			// .catch(() => dispatch(itemsHasErrored(true)));
		}
	}
}













// оригинал примера
// export function itemsFetchDataSuccess(json) {
// 	return {
// 		type: "ITEMS_FETCH_DATA_SUCCESS",
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
