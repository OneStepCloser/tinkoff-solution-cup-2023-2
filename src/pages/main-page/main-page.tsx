import React, {FC, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {add} from '../../store/expenses.slice';
import type {RootState} from '../../store/store';

import {Page} from '../../components/page/page';
import {Expense} from '../../components/expense/expense';
import {Category} from '../../store/categories.slice';
import {ExpenseList} from '../../components/expense-list/expense-list';

export const MainPage: FC = (props) => {
    const expenses = useSelector((state: RootState) => state.expenses.expenses);
    const categories = useSelector((state: RootState) => state.categories.categories);

    const categoriesMap = useMemo(() => categories.reduce<Record<string, Category>>((acc, cur) => {
        acc[cur.id] = cur;

        return acc;
    }, {}), [categories]);

    const dispatch = useDispatch();

    return (
        <Page>
            <ExpenseList>
                {expenses.map(({name, dateTime, categoryId, id, amount}) => (
                    <Expense
                        amount={amount}
                        key={id}
                        dateTime={dateTime}
                        text={name}
                        categoryColor={categoriesMap[categoryId].color}
                        categoryName={categoriesMap[categoryId].name}
                    />
                ))}
            </ExpenseList>
        </Page>
    );
};