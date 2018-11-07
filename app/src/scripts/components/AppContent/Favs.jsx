import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Favs extends React.Component {

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
            <div>
                <h1 className="spa_context-title">Favourites</h1>
                <section className="section spa_context-content">
                    <h2 className="spa_context-content-subtitle">Fav cards</h2>
                </section>
            </div>
        )
    }

    handleClick(evt){
        this.setState({
            title: this.props.message,
        })
    }
}

Favs.propTypes = {
    onClick: PropTypes.func,
};


export default Favs;