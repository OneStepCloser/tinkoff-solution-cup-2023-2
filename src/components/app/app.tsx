import React from 'react';
import {Helmet} from 'react-helmet';
import {Link, Route, Routes} from 'react-router-dom';

import {MainPage} from '../../pages/main/main';
import {WeatherPage} from '../../pages/weather/weather';

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
            <Link to="/">Home</Link>
            <Link to="/weather">Weather</Link>
            <Routes>
                <Route path='/weather' element={<WeatherPage/>}/>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
