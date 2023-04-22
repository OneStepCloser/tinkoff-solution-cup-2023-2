import React from 'react';
import {Helmet} from 'react-helmet';
import {Link, Route, Routes} from 'react-router-dom';

import {MainPage} from '../../pages/main-page/main-page';
import {CategoriesPage} from '../../pages/categories-page/categories-page';

import {getPath} from '../../utils';

import 'normalize.css';

function App() {
    return (
        <div className="App">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Link to="/">Список Расходов</Link>
            <Link to="/categories">Категории затрат</Link>
            <Routes>
                <Route path={'/categories'} element={<CategoriesPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
