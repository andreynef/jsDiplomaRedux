// Reselect — это библиотека для создания memoized selectors. Мы определяем селекторы как функции, извлекающие фрагменты состояния Redux для наших компонентов React.
// import { createSelector } from "reselect";
//
// const selectAllItems = somestate => somestate.itemsArr;
//
// export const selectAllLikes = createSelector(//функция возвращающая часть стора
//   selectAllItems,//первый аргумент как ф возвр часть стора
//   (resultOfSelectAllItems) => resultOfSelectAllItems.filter(item => item.liked_by_user)//второй аргумент это всегда ф принимающая результат 1го арг и возвращающая новую копию отредактированного стора
// );

// export const selectAllSmthElse = createSelector(
//   selectAllItems,
//   (resultOfSelectAllItems) => resultOfSelectAllItems.filter(item => item.type === "dog")//второй аргумент это всегда ф принимающая результат 1го арг и возвращающая новую копию отредактированного стора
// );

// export const SelectDogsAndCats = createSelector(
//   [selectAllDogs, selectAllCats],
//   (dogs, cats) => [...dogs, ...cats]
// );
