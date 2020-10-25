const HANDLE_DELETE = 'HANDLE_DELETE'
const HANDLE_CHANGE = 'HANDLE_CHANGE'
const HANDLE_SUBMIT = 'HANDLE_SUBMIT'

export const handleDeleteAction = id => {
	return {
		type: HANDLE_DELETE,
		id
	}
}

export const handleChangeAction = event => {
	// const objKey = event.target.name === 'js-textAreaName' ? 'textAreaValue' : 'inputValue';//условие определяющее какое именно свойство менять
	// const targetValue = event.target.value// какое значение использовать
	debugger
	return {
		type: HANDLE_CHANGE,
		event
		// [objKey]: targetValue,
	}
}

export const handleSubmitAction = event => {
	return {
		type: HANDLE_SUBMIT,
		event
	}
}