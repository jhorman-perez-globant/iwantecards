import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Router, Route, Link } from "react-router-dom";

class NavItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.unmountComponent = this.unmountComponent.bind(this);
    }

    componentDidMount(){
    }

    unmountComponent(evt){
        evt.preventDefault();
    }

    render() {
        return (
            <li className="list-item">
                <Link to={this.props.item.path}>{this.props.item.name}</Link>
            </li>
        )
    }

    handleClick(evt){
        this.setState({
            title: this.props.message,
        })
    }
}

NavItem.propTypes = {
    onClick: PropTypes.func,
};


export default NavItem;