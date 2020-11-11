
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
	let currentPage = 1;
	return () => currentPage++;
}

let counterPages = counter();

export const uAddAC = () => {
	return dispatch => {
		unsplash.photos.listPhotos(counterPages(), 10, "latest")
			.then(toJson)
			.then(json => {//arr ответ
				dispatch(addSuccess(json))
			})
	}
}

export const uProfileAC = () => {
	return dispatch => {
		unsplash.currentUser.profile()
			.then(toJson)
			.then(json => {//arr ответ
				dispatch(profileSuccess(json))
			})
	}
}

export const uToggleLikeAC = (obj) => {
	return dispatch => {
		dispatch(toggleLikeSuccess(obj));
		if (obj.liked_by_user) {
			unsplash.photos.unlikePhoto(obj.id)
				.then(toJson)
				.then(json => {//obj ответ
					console.log('heres my skipped answer', json)
				})
		} else {
			unsplash.photos.likePhoto(obj.id)
				.then(toJson)
				.then(json => {//obj ответ
					console.log('heres my skipped answer', json)
				})
		}
	}
}

