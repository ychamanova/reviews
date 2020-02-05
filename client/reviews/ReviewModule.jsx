import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

import OverviewHeader from './OverviewHeader.jsx';
import OverviewBody from './OverviewBody.jsx';

import { PORT } from '../../app.config.js';

const serverurl = `http://localhost:${PORT}`;

class ReviewModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const { pageId } = this.props;
    axios.get(`${serverurl}/reviews/${pageId}`)
      .then((res) => {
        const reviews = res.data;
        this.setState({ reviews });
      })
      .catch((err) => {
        console.log('error occurred when getting db results from within ReviewModule', err);
      });
  }

  render() {
    const { reviews } = this.state;
    const reviewCount = reviews.length;
    return (
      !reviewCount ? <div>Loading...</div> : (
        <div styleName="reviewsContainer">
          <div styleName="reviews">
            <OverviewHeader reviewCount={reviewCount} />
            <OverviewBody reviews={reviews} />
          </div>
        </div>
      )
    );
  }
}

ReviewModule.propTypes = {
  pageId: PropTypes.number.isRequired,
};

export default CSSModules(ReviewModule, styles, { allowMultiple: false });
