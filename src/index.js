import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../components/App';
import Header from '../components/Header';
import Tops from '../components/Tops';
import Outfits from '../components/Outfits';
import Bottoms from '../components/Bottoms';
import '../index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route exact path='/tops' render={() => <Header><Tops /></Header>} />
            <Route exact path='/outfits' render={() => <Header><Outfits /></Header>} />
            <Route exact path='/bottoms' render={() => <Header><Bottoms /></Header>} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);