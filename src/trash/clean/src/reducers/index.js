//Редюсеры - это ЧФ(!) фильтрующая действия, принимающ 2 арг 1)сущ стейт (массив/обьект) и 2) действие (action=obj) кот нужно провести с этим стейтом (определяется по type и фильтруется чер switch). Возврат - копия стейта (!).

import { combineReducers } from 'redux';

const rootReducer = (state, action) => {

	switch (action.type){

		case "TOGGLE_LIKE_SUCCESS"://приходит obj
			return {
				...state,
				items: state.items.map(item => {
					if (item.id === action.obj.id){
						let {liked_by_user, likes} = item;
						item.liked_by_user = !liked_by_user;
						item.likes = action.obj.liked_by_user ? likes + 1 : likes - 1;
						return item
					} else {
						return item
					}
				})
			}

		case "ADD_SUCCESS"://приходит Arr json
			return {
				...state,
				items: [...state.items,...action.arr],
			};

		case "PROFILE_SUCCESS"://приходит Obj json
			return {
				...state,
				userProfile:action.obj,
			};

		default:
			return state;
	}
}

// const rootReducer = combineReducers({
// 	uSuccessReducer
// });

export default rootReducer;