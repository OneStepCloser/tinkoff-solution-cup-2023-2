import React, { FC } from 'react';

import './expense-list.css';

export interface ExpenseListProps {
    children: React.ReactNode
}

export const ExpenseList: FC<ExpenseListProps> = (props) => {
    const {
        children
    } = props;

    return (
        <div className="expense-list">
            {children}
        </div>
    );
};