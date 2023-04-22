import {configureStore} from '@reduxjs/toolkit';

import categoriesReducer from './categories.slice';
import expensesReducer from './expenses.slice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        expenses: expensesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch