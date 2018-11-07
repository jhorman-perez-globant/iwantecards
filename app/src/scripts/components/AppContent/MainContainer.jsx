import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Home from '../AppContent/Home';
import Favs from '../AppContent/Favs';
import All from '../AppContent/All';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
        this.unmountComponent = this.unmountComponent.bind(this);
    }

    componentDidMount(){
    }

    unmountComponent(evt){
        evt.preventDefault();
    }

    render() {
        return (
            <div id="spaMainContainer" className="spa_context">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/favs" component={Favs} />
                    <Route path="/all" component={All} />
                </Switch>
            </div>
        )
    }
}

MainContainer.propTypes = {
    onClick: PropTypes.func,
};


export default MainContainer;