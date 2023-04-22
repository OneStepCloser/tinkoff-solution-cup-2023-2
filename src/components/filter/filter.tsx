import React, {FC, useCallback, useEffect, useState} from 'react';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';

import {Category} from '../../store/categories.slice';

import './filter.css';

export interface FilterProps {
    categories: Category[];
    onCategoryChosen: (id: string | null) => void;
    onClean: VoidFunction;
}

export const Filter: FC<FilterProps> = (props) => {
    const {
        categories,
        onCategoryChosen,
        onClean,
    } = props;

    const [category, setCategory] = useState<null | Category>(null);

    useEffect(() => {
        if (category) {
            onCategoryChosen(category.id);
        }
    }, [category]);

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

    const handleClean = useCallback(() => {
        setCategory(null);
        onClean();
    }, [setCategory, onClean]);

    return (
        <div className="filter">
            <h3 className="filter__header">Фильтрация</h3>
            <div className="filter__content">
                <Dropdown
                    value={category}
                    onChange={(e) => setCategory(e.value)}
                    options={categories}
                    placeholder="Категория"
                    itemTemplate={optionTemplate}
                    valueTemplate={optionTemplate}
                    optionLabel="name"
                />
                <div className="filter__clear-button">
                    <Button
                        label="Очистить фильтры"
                        onClick={handleClean}
                        outlined
                        rounded
                    />
                </div>
            </div>
        </div>
    );
};