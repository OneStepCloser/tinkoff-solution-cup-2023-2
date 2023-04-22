import React, { FC } from 'react';
import formatThousands from 'format-thousands';

import './expense.css';

export interface ExpenseProps {
    amount: number;
    dateTime: string;
    text: string;
    categoryColor: string | null;
    categoryName: string | null;
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
                {formatThousands(amount, ' ')} ₽
            </div>
            <div className="expense__info expense__cell">
                <div className="expense__name">
                    {text}
                </div>
                <div className="expense__category">
                    {categoryColor && (
                        <div className="expense__category-badge" style={{ backgroundColor: categoryColor }} />
                    )}
                    <div className="expense__category-name">
                        {categoryName || 'Без категории'}
                    </div>
                </div>
            </div>
            <div className="expense__datetime expense__cell">
                {dateTime}
            </div>
        </div>
    );
};