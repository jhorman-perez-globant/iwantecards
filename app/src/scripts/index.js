import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import NavBar from './components/MenuBar/NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/AppContent/Home';
import Favs from './components/AppContent/Favs';
import All from './components/AppContent/All';
import MainContainer from './components/AppContent/MainContainer';
import css from '../styles/css/app.main.css';
//import { BrowserRouter } from 'react-router-dom'

const App = () => (
    <div>
        <NavBar />
        <MainContainer />
    </div>
)


ReactDOM.render((
    <Router>
        <div>
            <App />
        </div>
    </Router>
), document.getElementById('appRootContent'))

/* ReactDOM.render(
    <NavBar/>,
    document.getElementById('reactNavBar')
); */

module.hot.accept();