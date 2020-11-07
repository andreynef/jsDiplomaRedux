//action creators

export const clickPreviewAction = (id) => {//готовые экшены летящие в редюсеры. Там они редюсятся/фильтруются и посылаются/диспатчатся в стор с новым стейтом
	console.log('in clickPreviewAction', id )
	return {
		type: "CLICK_PREVIEW_ACTION",
		payload:id
	}
};

export const clickLogoutAction = () => {
	return {
		type: "CLICK_LOGOUT_ACTION",
	}
};

export const isLoadingAction = (bool) => {
	return {
		type: "IS_LOADING_ACTION",
		payload:bool,
	}
};

export const uToggleLikeSuccessAction = (json) => {//готовые экшены-ответы от запросов
	console.log('in uToggleLikeSuccessAction', json)
	return {
		type: "UNSPLASH_TOGGLELIKE_SUCCESS_ACTION",
		payload:json
	}
};

export function uAddSuccessAction(json) {//готовые экшены-ответы от запросов
	console.log('in uAddSuccessAction', json)

	return {
		type: "UNSPLASH_ADD_SUCCESS_ACTION",
		payload:json
	};
}

export function uProfileSuccessAction(json) {//готовые экшены-ответы от запросов
	return {
		type: "UNSPLASH_PROFILE_SUCCESS_ACTION",
		payload:json
	};
}

