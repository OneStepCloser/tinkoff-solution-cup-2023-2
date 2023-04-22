import React from 'react';
import {Helmet} from 'react-helmet';
import {Route, Routes} from 'react-router-dom';

import {MainPage} from '../../pages/main-page/main-page';
import {CategoriesPage} from '../../pages/categories-page/categories-page';
import {Header} from '../header/header';
import {Nav} from '../nav/nav';

import 'normalize.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

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
            <Header />
            <Nav />
            <Routes>
                <Route path={'/categories'} element={<CategoriesPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
