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

		case "ADD_SUCCESS"://приходит Arr
			return {
				...state,
				items: [...state.items,...action.arr],
			};

		case "PROFILE_SUCCESS"://приходит Obj
			return {
				...state,
				userProfile:action.obj,
			};

		default:
			return state;
	}
}

export default rootReducer;