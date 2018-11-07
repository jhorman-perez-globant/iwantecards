import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {

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
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }

    handleClick(evt){
        this.setState({
            title: this.props.message,
        })
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
};


export default Button;