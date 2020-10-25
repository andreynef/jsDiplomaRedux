// Примечание: В Redux всегда вызываются все редьюсеры независимо от того какое действие было отправлено, поэтому внутри каждого из них нужно возвращать оригинал состояния, если не действие не применяется.
// Редюсеры - это "чистые функции". Они не должны изменять состояние, вместо этого они должны возвращать модифицированную копию.
//Редюсеры - это чф принимающ 2 арг 1)сущ стейт и 2) действие кот нужно провести с этим стейтом (определяется по type и фильтруется чер switch)

const setLocalStorage = (newSet)=>{//создаем метод чтобы не повторяться
	localStorage.setItem('commentItems', JSON.stringify(newSet));
}

const reducer = (state = {}, action) => {//ф фильтрующая действия. Ей должны прийти пропсы с массивом state ([] если нет) и объект action.
	// alert(action)

	switch (action.type){//ВАЖНО! Из Reducers нужно возвращать копию стейта (новую базу)

		case 'HANDLE_SUBMIT':
			action.event.preventDefault();

			//определение id последнего комментария для корректной работы нумерации следующих комментариев (чтобы не переопределялись)
			// let lastCommentId;
			let stateItemsLength = state.items.length;
			let lastCommentId = stateItemsLength === 0 ? [] : state.items[(state.items.length)-1].id  //определение значения id последнего элемента в массиве. Последний, потому что при удалении серединного элемента при последующих добавлениях может совпасть значение id.
			
			const newItem = {
				id:++lastCommentId,//передача номера id на +1
				name:state.form.nameField,
				text:state.form.textField,
				date: new Date().toLocaleString('ru'),
			};

			const newStateAfterSubmission = {//копия
				...state,//копирование содержимого - того что было  (тема глубокого и поверхностного копирования)
				items:[...state.items, newItem],//новое вложение, значит снова копирование(...) того что было, иначе это не глубокое копирование и останутся ссылки что НЕЛЬЗЯ делать при иммутабельной концепции реакта.
				form: {
					nameField: '', //обнуление полей. Простые значение не имеют ссылок, так что можно просто писать так.
					textField: ''
				}
			}
			
			setLocalStorage(newStateAfterSubmission);//записываем новый массив в локал в формате('text','text'), тобишь в формате JSON		

			return newStateAfterSubmission//возвращает новый массив с новыми значениями(объектами). (скобки - значит создание нового обьекта. (Тжсм  let a={} return a)

		case 'HANDLE_DELETE':
			const filteredStateItemsArr = state.items.filter(item => item.id !== action.id)//создаем Новый отфильтрованный массив (без элемента с нужным id)
			const newStateAfterDeletion = {//копия
				...state,
				items: filteredStateItemsArr
			}

			setLocalStorage(newStateAfterDeletion);//записываем новый массив в локал в формате('text','text'), тобишь в формате JSON				
			return newStateAfterDeletion
		
		case 'HANDLE_CHANGE':
			const key = action.event.target.name;
			const value = action.event.target.value
			const newStateAfterChanging = {//копия
				...state, 
				form: {
					...state.form,
					[key]: value,				
				}
			}
			setLocalStorage(newStateAfterChanging);//записываем в локал, чтобы при перезагрузке страницы поля оставались заполненными на последнем месте 				

			return newStateAfterChanging
		
		default://если action.type не совпадает с кейсами то вернуть старый стейт
			return state;
	}
}

export default reducer;