import React, {FC, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {add} from '../../store/expenses.slice';
import type {RootState} from '../../store/store';

import {Page} from '../../components/page/page';
import {Expense} from '../../components/expense/expense';
import {Category} from '../../store/categories.slice';
import {ExpenseList} from '../../components/expense-list/expense-list';
import {ExpenseForm} from '../../components/expense-form/expense-form';
import {formatDate} from '../../utils';

export const MainPage: FC = () => {
    const expenses = useSelector((state: RootState) => state.expenses.expenses);
    const categories = useSelector((state: RootState) => state.categories.categories);

    const categoriesMap = useMemo(() => categories.reduce<Record<string, Category>>((acc, cur) => {
        acc[cur.id] = cur;

        return acc;
    }, {}), [categories]);

    const dispatch = useDispatch();

    return (
        <Page>
            <ExpenseForm
                categories={categories}
                onAdd={(name, categoryId, amount) => dispatch(add({ name, categoryId, amount }))}
            />
            <ExpenseList>
                {expenses.map(({name, dateTime, categoryId, id, amount}) => (
                    <Expense
                        amount={amount}
                        key={id}
                        dateTime={formatDate(dateTime)}
                        text={name}
                        categoryColor={categoryId && categoriesMap[categoryId].color || null}
                        categoryName={categoryId && categoriesMap[categoryId].name || null}
                    />
                ))}
            </ExpenseList>
        </Page>
    );
};