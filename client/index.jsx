import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import ReviewModule from './reviews/ReviewModule.jsx';

const serverurl = 'http://localhost:3000';
const pageId = 1;

const App = (props) => {
  const { pageId, reviews } = props;
  return (
    <ReviewModule pageId={pageId} reviews={reviews} />
  );
};

App.propTypes = {
  pageId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

axios.get(`${serverurl}/reviews/${pageId}`)
  .then((res) => {
    const reviews = res.data;
    ReactDOM.render(<App pageId={pageId} reviews={reviews} />, document.getElementById('app'));
  })
  .catch((err) => {
    console.log('error occurred while getting db results', err);
  });
