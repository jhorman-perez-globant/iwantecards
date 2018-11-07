import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import logo from '../../../../assets/images/ecards-logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../AppContent/Home';
import Favs from '../AppContent/Favs';
import All from '../AppContent/All';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: [
                {
                    id: 1,
                    name: 'Home',
                    path: '/',
                },
                {
                    id: 2,
                    name: 'Favourites',
                    path: '/favs',
                },
                {
                    id: 3,
                    name: 'All',
                    path: '/all',
                },
            ]
        };
        this.handleClick = this.handleClick.bind(this);
        this.getMenuItems = this.getMenuItems.bind(this);
        this.unmountComponent = this.unmountComponent.bind(this);
    }

    componentDidMount(){
    }

    unmountComponent(evt){
        evt.preventDefault();
    }

    render() {
        let menuItems = this.getMenuItems();
        return (
            <nav className="navbar_app">
                <figure className="navbar_app-logo"><img src={logo} alt="Logo eCards" /></figure>
                <div className="divider"></div>
                <ul className="navbar_app-list list list--no_decoration">
                    {menuItems}
                </ul>
            </nav>
        )
    }

    getMenuItems(){
        return this.state.items.map((item) => {
            return <NavItem key={item.id} item={item} />
        });
    }

    handleClick(evt){
        this.setState({
            title: this.props.message,
        })
    }
}

NavBar.propTypes = {
    onClick: PropTypes.func,
};


export default NavBar;