import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/main';

import './style/reset.css';
import './style/style.scss';

const App = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
    </Switch>
);

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));