import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/store";


// react-redux 
import { Provider } from 'react-redux';

// react-router-dom
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// components
import GamesPage from './components/GamesPage';
import GameFormPage from './components/GameFormPage';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="ui container">
                <div className="ui three item menu">
                    <NavLink exact activeClassName="active" className="item" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active" className="item" to="/games">Games</NavLink>
                    <NavLink activeClassName="active" className="item" to="/games/new">Add New Game</NavLink>
                </div>
                <Route exact path="/" component={App} />
                <Route exact path="/games" component={GamesPage} />
                <Route path="/games/new" component={GameFormPage} />
                <Route path="/game/:_id" component={GameFormPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
