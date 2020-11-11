
import {toJson} from "unsplash-js";
import unsplash from "../services/unsplash";

const ADD_SUCCESS = 'ADD_SUCCESS';
const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
const TOGGLE_LIKE_SUCCESS = 'TOGGLE_LIKE_SUCCESS';

//-------------готовые экшены летящие в редюсеры. Там они редюсятся/фильтруются и посылаются/диспатчатся в стор с новым стейтом

export const toggleLikeSuccess = (obj) => {
	return {
		type: TOGGLE_LIKE_SUCCESS,
		obj,
	}
};

export const addSuccess = (arr) => {
	return {
		type: ADD_SUCCESS,
		arr,
	}
};

function profileSuccess (obj) {
	return {
		type: PROFILE_SUCCESS,
		obj
	}
}


//-------------предподготовка экшенов. Action creators. Thunk.

// По умолчанию action creators в Redux не поддерживают асинхронные действия. Решение - Redux Thunk. Thunk позволяет писать создатели действий, которые возвращают функцию вместо самого обьекта действия.


const counter = () => {//счетчик с замыканием (страницы)
	let currentPage = 10;
	console.log('in counter. Returning currentPage + 1 :',currentPage + 1)
	return () => currentPage++;
}

let counterPages = counter();

export const uAddAC = () => {//ф создающая запрос в Unsplash.
	console.log('in Actions Add. Unsplash.bearerToken is:',unsplash._bearerToken)
	return dispatch => {
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