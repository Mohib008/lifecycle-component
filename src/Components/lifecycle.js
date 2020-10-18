import React from 'react';
import './lifecycle.css';

class lifecycle extends React.Component {
    constructor() {
        super();
        console.log('constructor!');
    }

    componentDidMount() {
        console.log('componentDidMount!');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate!');
    }

    componentWillUnmount() {
        console.log('componentWillMount!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate!', nextProps);
        return true;
    }


 render() {
     console.log("render!");
    return (
        <div className="lifecycle">
            <h3>Lifecycle Components</h3>
            {this.props.text}
        </div>
    )
  }
}

export default lifecycle;
