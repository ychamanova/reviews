import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReviewModule from './reviews/ReviewModule.jsx';

// class App extends Component {
//   constructor(props) {
//       super(props);
//   }

//   render() {
//       return (
//           <ReviewModule pageId={this.props.pageId} />
//       );
//   }
// }

const App = (props) => {
  const { pageId } = props;
  return (
    <ReviewModule pageId={pageId} />
  );
};

App.propTypes = {
  pageId: PropTypes.number.isRequired,
};

ReactDOM.render(<App pageId={1} />, document.getElementById('app'));
