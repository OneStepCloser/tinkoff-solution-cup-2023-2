import React, {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {add} from '../../store/categories.slice';
import type {RootState} from '../../store/store';

import {Category} from '../../components/category/category';
import {Page} from '../../components/page/page';
import {CategoryForm} from "../../components/category-form/category-form";

export const CategoriesPage: FC = () => {
    const categories = useSelector((state: RootState) => state.categories.categories);
    const dispatch = useDispatch();

    return (
        <Page>
            <h2>Категории расходов</h2>
            <CategoryForm onAdd={(name, color) => dispatch(add({ name, color }))} />
            {categories.map((category) => (
                <Category
                    key={category.id}
                    text={category.name}
                    color={category.color}
                />
            ))}
        </Page>

    );
};
