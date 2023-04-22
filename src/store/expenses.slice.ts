import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';

import {Category} from './categories.slice';

export interface Expense {
    id: string;
    name: string;
    dateTime: string;
    categoryId: Category['id'];
    amount: number;
}

export interface ExpensesState {
    expenses: Expense[];
}

const mockExpenses = [
    {
        id: uuid(),
        categoryId: '1',
        name: 'Ужин в KFC',
        dateTime: '2023-04-20T23:30:00+03:00',
        amount: 850,
    },
    {
        id: uuid(),
        categoryId: '2',
        name: 'Бархатные тяги',
        dateTime: '2023-04-21T16:17:00+03:00',
        amount: 100500,
    },
    {
        id: uuid(),
        categoryId: '1',
        name: 'Ужин в Маке',
        dateTime: '2023-04-21T22:45:00+03:00',
        amount: 730,
    },
    {
        id: uuid(),
        categoryId: '3',
        name: 'Пельмени и мороженка',
        dateTime: '2023-04-22T12:25:00+03:00',
        amount: 415,
    },
];

const initialState: ExpensesState = {
    expenses: mockExpenses,
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Omit<Expense, 'id'>>) => {
            const newExpense = { ...action.payload, id: uuid() };
            state.expenses = [...state.expenses, newExpense];
        },
        // delete: (state, action: PayloadAction<Expense['id']>) => {
        //     state.expenses = state.expenses.filter(expense => expense.id !== expense.payload);
        // },
    },
})

export const {add} = expensesSlice.actions

export default expensesSlice.reducer;