import { Component } from 'react';
import reactDOM from 'react-dom';
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

reactDOM.render(<App/>, document.getElementById('app'));
