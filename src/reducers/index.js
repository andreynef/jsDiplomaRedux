//Редюсеры - это чф принимающ 2 арг 1)сущ стейт и 2) действие кот нужно провести с этим стейтом (определяется по type и фильтруется чер switch)

import {HOMEPAGE, INITIAL_PAGE} from "../constants";

const rootReducer = (state = {}, action) => {//ф фильтрующая действия. Ей должны прийти 2 арг, массив/обьект state и объект action.

	switch (action.type){//Важно! Из Reducers нужно возвращать копию стейта (новую базу)

		case 'CLICK_PREVIEW_ACTION':
			return {
				...state,
				isCardOpened:true,
				clickedObj:action.cardObj,
			};

		case 'CLICK_CLOSE_ACTION':
			return {
				...state,
				isCardOpened:false
			};

		case 'CLICK_LOGOUT_ACTION':
			localStorage.removeItem('accessToken');
			window.location.assign('https://unsplash.com');
			break;

		case 'UNSPLASH_LIKE_SUCCESS_ACTION':
			return {
				...state,
				items: state.items.filter(item => item.id === action.id ? (item.liked_by_user=true): item)
			}

		case 'UNSPLASH_UNLIKE_SUCCESS_ACTION':
			return {
				...state,
				items: state.items.filter(item => item.id === action.id ? (item.liked_by_user=false): item)
			}

		case 'UNSPLASH_LISTPHOTOS_SUCCESS_ACTION':
			const nextPage = state.nextPage ? state.nextPage+1: INITIAL_PAGE+1;//проверка для первого рендера списка
			const prevItems = state.items ? state.items: [];//проверка для первого рендера списка
			return {
				...state,
				items: [...prevItems,...action.json],
				nextPage:nextPage,
			};

		case 'UNSPLASH_PROFILE_SUCCESS_ACTION':
			return {
				...state,
				userProfile:action.json,
			};

		default:
			return state;
	}
}

export default rootReducer;