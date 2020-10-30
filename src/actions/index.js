//action creators
const CLICK_PREVIEW_ACTION = 'CLICK_PREVIEW_ACTION';
const CLICK_LOGOUT_ACTION = 'CLICK_LOGOUT_ACTION';
const CLICK_CLOSE_ACTION = 'CLICK_CLOSE_ACTION';
const UNSPLASH_LIKE_SUCESS_ACTION = 'UNSPLASH_LIKE_SUCESS_ACTION';
const UNSPLASH_UNLIKE_SUCESS_ACTION = 'UNSPLASH_UNLIKE_SUCESS_ACTION';
const UNSPLASH_LISTPHOTOS_SUCCESS_ACTION = 'UNSPLASH_LISTPHOTOS_SUCCESS_ACTION';
// const UNSPLASH_ADD_SUCCESS_ACTION = 'UNSPLASH_ADD_SUCCESS_ACTION';
const UNSPLASH_PROFILE_SUCCESS_ACTION = 'UNSPLASH_PROFILE_SUCCESS_ACTION';

export const clickPreviewAction = cardObj => {//готовые экшены летящие в редюсеры. Там они редюсятся/фильтруются и посылаются/диспатчатся в стор с новым стейтом
	return {
		type: CLICK_PREVIEW_ACTION,
		cardObj
	}
};

export const clickLogoutAction = () => {
	return {
		type: CLICK_LOGOUT_ACTION,
	}
};

export const clickCloseAction = () => {
	return {
		type: CLICK_CLOSE_ACTION,
	}
};

export const uLikeSuccessAction = (json) => {//готовые экшены-ответы от запросов
	return {
		type: UNSPLASH_LIKE_SUCESS_ACTION,
		json
	}
};

export const uUnlikeSuccessAction = (json) => {
	return {
		type: UNSPLASH_UNLIKE_SUCESS_ACTION,
		json
	}
};

export function uListPhotosSuccessAction(json) {
	return {
		type: UNSPLASH_LISTPHOTOS_SUCCESS_ACTION,
		json
	};
}

export function uProfileSuccessAction(json) {
	return {
		type: UNSPLASH_PROFILE_SUCCESS_ACTION,
		json
	};
}

