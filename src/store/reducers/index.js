//Редюсеры - это ЧФ(!) фильтрующая действия, принимающ 2 арг 1)сущ стейт (массив/обьект) и 2) действие (action=obj) кот нужно провести с этим стейтом (определяется по type и фильтруется чер switch). Возврат - копия стейта (!).

const rootReducer = (state, action) => {

	switch (action.type){

		case "CLICK_PREVIEW_ACTION"://приходит Obj кликнутого итема
			return {
				...state,
				clickedObj:action.payload,
			};

		case "IS_LOADING_ACTION":
			return {
				...state,
				isLoading:action.payload,
			};

		case "CLICK_LOGOUT_ACTION":
			return {
				...state,
				isAuth:false,
			};

		case "UNSPLASH_TOGGLELIKE_SUCCESS_ACTION"://приходит Obj json с измененным лайком
			console.log('in UNSPLASH_TOGGLELIKE_SUCCESS_ACTION action.p[ayload.photo is:', action.payload.photo)
			return {
				...state,
				items: state.items.filter(arrItem => {//замена существующего итема на приходящий итем.
					if (arrItem.id === action.payload.photo.id){
						return action.payload.photo
					} else {
						return arrItem
					}
				})
			}

		case "UNSPLASH_ADD_SUCCESS_ACTION"://приходит Arr json
			console.log('in UNSPLASH_ADD_SUCCESS_ACTION action.payload is:', action.payload)

			return {
				...state,
				items: [...state.items,...action.payload],
				nextPage:state.nextPage+1,
			};

		case "UNSPLASH_PROFILE_SUCCESS_ACTION"://приходит Obj json
			return {
				...state,
				userProfile:action.payload,
			};

		default:
			return state;
	}
}

export default rootReducer;