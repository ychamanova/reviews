import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReviewModule from './reviews/ReviewModule.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReviewModule/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
