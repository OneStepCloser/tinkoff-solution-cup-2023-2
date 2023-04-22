import React, { FC } from 'react';

import './expense.css';

export interface ExpenseProps {
    amount: number;
    dateTime: string;
    text: string;
    categoryColor: string;
    categoryName: string;
}

export const Expense: FC<ExpenseProps> = (props) => {
    const {
        amount,
        dateTime,
        text,
        categoryColor,
        categoryName,
    } = props;

    return (
        <div className="expense">
            <div className="expense__amount expense__cell">
                {amount} ₽
            </div>
            <div className="expense__info expense__cell">
                <div className="expense__name">
                    {text}
                </div>
                <div className="expense__category">
                    <div className="expense__category-badge" style={{ backgroundColor: categoryColor }} />
                    <div className="expense__category-name">
                        {categoryName}
                    </div>
                </div>
            </div>
            <div className="expense__datetime expense__cell">
                {dateTime}
            </div>
        </div>
    );
};