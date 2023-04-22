import React, { FC } from 'react';
import {Link} from 'react-router-dom';

import './nav.css';

export const Nav: FC = () => {
    return (
        <div className="nav">
            <Link to="/">Список Расходов</Link>
            <Link to="/categories">Категории затрат</Link>
        </div>
    );
};