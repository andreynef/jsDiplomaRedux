//-------------предподготовка экшенов. Action creators. Thunk.
// По умолчанию action creators в Redux не поддерживают асинхронные действия. Решение - Redux Thunk.
// Thunk позволяет писать создатели действий, которые возвращают функцию вместо самого обьекта действия.

import {toJson} from "unsplash-js";
import unsplash from "../services/unsplash";
import {addSuccess, toggleLikeSuccess, profileSuccess} from "./index";


const counter = () => {//счетчик с замыканием (страницы)
	let currentPage = 10;
	console.log('in counter. Returning currentPage + 1 :',currentPage + 1)
	return () => currentPage++;
}

let counterPages = counter();

export const uAddAC = () => {//ф создающая запрос в Unsplash.
	console.log('in Actions Add. Unsplash.bearerToken is:',unsplash._bearerToken)
	return (dispatch,getState) => {//2м аргументом идет стейт, если нужен.
		unsplash.photos.listPhotos(counterPages(), 10, "latest")//counterPages() это число кот кажд раз при вызове увеличся на 1.
			.then(toJson)
			.then(json => {//arr ответ
				console.log('got json answer from add:', json)
				dispatch(addSuccess(json))//отправка действия dispatch кот необходима для Redux.
			})
	}
}

export const uProfileAC = () => {//ф создающая запрос в Unsplash.
	return dispatch => {
		unsplash.currentUser.profile()
			.then(toJson)
			.then(json => {//arr ответ
				dispatch(profileSuccess(json))//отправка действия dispatch кот необходима для Redux.
			})
	}
}

export const uToggleLikeAC = (obj) => {

	return dispatch => {
		if (obj.liked_by_user) {
			dispatch(toggleLikeSuccess(obj));//меняю сам в редюсерах. Оставляю запросы летящими дальше.
			unsplash.photos.unlikePhoto(obj.id)
				.then(toJson)
				.then(json => {//obj ответ
					console.log('skipped unlike answer:', json.photo.liked_by_user)
				})
		} else {
			dispatch(toggleLikeSuccess(obj));//меняю сам в редюсерах. Оставляю запросы летящими дальше.
			unsplash.photos.likePhoto(obj.id)
				.then(toJson)
				.then(json => {//obj ответ
					console.log('skipped like answer:', json.photo.liked_by_user)
				})
		}
	}
}


// .then(res => {// искусственная задержка для dev
// 	setTimeout(() => {
// 		dispatch(addTodoSuccess(res.data));
//    throw new Error('NOT!');//или ошибка
// 	}, 2500);
// })




// оригинал примера файла actions/index.js
// export function itemsFetchDataSuccess(json) {
// 	return {
// 		type: "ITEMS_FETCH_DATA_SUCCESS",
// 		json
// 	};
// }
//
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