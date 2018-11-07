import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Home extends React.Component {

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
                <h1 className="spa_context-title">Home</h1>
                <section className="section spa_context-content">
                    <h2 className="spa_context-content-subtitle">Recommended cards</h2>
                    <div className="section-icons ecards_icons">
                        <ul className="ecards_icons-list list list--no_decoration">
                            <li className="list-item"><img src="../assets/images/categories/just-because.png" alt="" className="preview"></img></li>
                            <li className="list-item"><img src="../assets/images/categories/halloween.png" alt="" className="preview"></img></li>
                            <li className="list-item"><img src="../assets/images/categories/peanuts.png" alt="" className="preview"></img></li>
                            <li className="list-item"><img src="../assets/images/categories/autumn.png" alt="" className="preview"></img></li>
                            <li className="list-item"><img src="../assets/images/categories/birthday.png" alt="" className="preview"></img></li>
                        </ul>
                    </div>
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

Home.propTypes = {
    onClick: PropTypes.func,
};


export default Home;