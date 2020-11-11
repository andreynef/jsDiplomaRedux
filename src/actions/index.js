import {ADD_SUCCESS, PROFILE_SUCCESS, TOGGLE_LIKE_SUCCESS} from "./types";

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

export const profileSuccess = (obj) => {
	return {
		type: PROFILE_SUCCESS,
		obj
	}
}