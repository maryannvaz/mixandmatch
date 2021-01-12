import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route exact path='/' render={() => <Header><Tops /></Header>} />
            <Route exact path='/' render={() => <Header><Bottoms /></Header>} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);