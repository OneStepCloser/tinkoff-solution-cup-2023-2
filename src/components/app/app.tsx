import React from 'react';
import {Helmet} from 'react-helmet';

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
            Hello world!
        </div>
    );
}

export default App;
