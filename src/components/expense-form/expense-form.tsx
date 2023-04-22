import React, {FC, useCallback, useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {InputNumber} from 'primereact/inputnumber';
import {Button} from 'primereact/button';

import {Category} from '../../store/categories.slice';

import './expense-form.css';

export interface ExpenseFormProps {
    categories: Category[];
    onAdd: (name: string, categoryId: string | null, amount: number) => void;
}

export const ExpenseForm: FC<ExpenseFormProps> = (props) => {
    const {
        categories,
        onAdd,
    } = props;

    const [name, setName] = useState('');
    const [category, setCategory] = useState<null | Category>(null);
    const [amount, setAmount] = useState<number>(0);

    const optionTemplate = (option: Category, props?: any) => {
        if (option) {
            return (
                <div className="expense__form-dropdown-item">
                    <div className="expense__form-category-badge" style={{backgroundColor: option.color}}/>
                    <div className="expense__form-category-name">
                        {option.name}
                    </div>
                </div>
            );
        }

        return <span>{props?.placeholder}</span>;

    };

    return (
        <div className="expense__form">
            <h3>Добавить новый расход</h3>
            <div className="expense__form-fields">
                <InputText
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Название"
                    className="expense__form-name"
                />
                <Dropdown
                    value={category}
                    onChange={(e) => setCategory(e.value)}
                    options={categories}
                    placeholder="Категория"
                    itemTemplate={optionTemplate}
                    valueTemplate={optionTemplate}
                    optionLabel="name"
                />
                <InputNumber
                    placeholder="Сумма"
                    value={amount}
                    onValueChange={(e) => setAmount(e.value || 0)}
                    min={0}
                />
                <Button
                    label="Добавить"
                    onClick={() => onAdd(name, category?.id || null, amount)}
                />
            </div>
        </div>
    );
};