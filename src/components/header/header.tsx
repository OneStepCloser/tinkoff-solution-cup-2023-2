import React, { FC } from 'react';

import './header.css';

export const Header: FC = () => {
    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__text">😎 Могу себе позволить</h1>
            </div>
        </div>
    );
};