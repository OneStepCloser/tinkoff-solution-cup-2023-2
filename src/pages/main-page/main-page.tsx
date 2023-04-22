import React, {FC, useCallback, useMemo, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import formatThousands from 'format-thousands';

import {add} from '../../store/expenses.slice';
import type {RootState} from '../../store/store';

import {Page} from '../../components/page/page';
import {Expense} from '../../components/expense/expense';
import {Category} from '../../store/categories.slice';
import {ExpenseList} from '../../components/expense-list/expense-list';
import {ExpenseForm} from '../../components/expense-form/expense-form';
import {formatDate} from '../../utils';
import {Filter} from "../../components/filter/filter";

export const MainPage: FC = () => {
    const expenses = useSelector((state: RootState) => state.expenses.expenses);
    const categories = useSelector((state: RootState) => state.categories.categories);

    const [filterCategoryId, setFilterCategoryId] = useState<null | string>(null);

    const categoriesMap = useMemo(() => categories.reduce<Record<string, Category>>((acc, cur) => {
        acc[cur.id] = cur;

        return acc;
    }, {}), [categories]);

    const dispatch = useDispatch();

    const handleClean = useCallback(() => {
        setFilterCategoryId(null);
    }, [setFilterCategoryId]);

    const filteredExpenses = useMemo(() => {
        return expenses.filter((expense) => filterCategoryId ? expense.categoryId === filterCategoryId : true);
    }, [expenses, filterCategoryId]);

    const totalAmount = useMemo(() => filteredExpenses.reduce((acc, { amount }) => acc + amount, 0), [filteredExpenses]);

    return (
        <Page>
            <ExpenseForm
                categories={categories}
                onAdd={(name, categoryId, amount) => dispatch(add({ name, categoryId, amount }))}
            />
            <Filter categories={categories} onCategoryChosen={(id) => setFilterCategoryId(id)} onClean={handleClean} />
            <h3 className="main-page__total-amount">
                Общая сумма расходов: {formatThousands(totalAmount, ' ')} ₽
            </h3>
            <ExpenseList>
                {filteredExpenses.map(({name, dateTime, categoryId, id, amount}) => (
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