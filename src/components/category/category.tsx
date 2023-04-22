import React, { FC } from 'react';

import './category.css';

export interface CategoryProps {
    text: string;
    color: string;
}

export const Category: FC<CategoryProps> = (props) => {
    const {
        text,
        color,
    } = props;

    return (
        <div className="category">
            <div className="category__badge" style={{ backgroundColor: color }}/>
            <div className="category__name">
                {text}
            </div>
        </div>
    );
};