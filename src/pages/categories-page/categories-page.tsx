import React, {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {add} from '../../store/categories.slice';
import type {RootState} from '../../store/store';

import {Category} from '../../components/category/category';
import {Page} from '../../components/page/page';

export const CategoriesPage: FC = (props) => {
    const categories = useSelector((state: RootState) => state.categories.categories);
    const dispatch = useDispatch();

    return (
        <Page>
            <h2>Категории расходов</h2>
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

// <div className="categories-page">
//     <button
//         aria-label="Increment value"
//         onClick={() => dispatch(increment())}
//     >
//         Increment
//     </button>
//     <span>{count}</span>
//     <button
//         aria-label="Decrement value"
//         onClick={() => dispatch(decrement())}
//     >
//         Decrement
//     </button>
// </div>