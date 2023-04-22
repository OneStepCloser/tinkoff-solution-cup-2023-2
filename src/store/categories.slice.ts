import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';

export interface Category {
    id: string;
    name: string;
    color: string;
}

export interface CategoriesState {
    categories: Category[];
}

const predefinedCategories = [
    {
        id: '1',
        name: 'Рестораны и кафе',
        color: '#ff740e',
    },
    {
        id: '2',
        name: 'Одежда и обувь',
        color: '#6600d3',
    },
    {
        id: '3',
        name: 'Супермаркеты',
        color: '#008d45',
    },
];

const initialState: CategoriesState = {
    categories: predefinedCategories,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Omit<Category, 'id'>>) => {
            const newCategory = {...action.payload, id: uuid()};
            state.categories = [...state.categories, newCategory]
        },
        // delete: (state, action: PayloadAction<Category['id']>) => {
        //     state.categories = state.categories.filter(category => category.id !== action.payload);
        // },
    },
})

export const {add} = categoriesSlice.actions

export default categoriesSlice.reducer;