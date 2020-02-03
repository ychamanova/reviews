import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

import OverviewHeader from './OverviewHeader.jsx';
import OverviewBody from './OverviewBody.jsx';

const ReviewModule = (props) => {
  const { reviews } = props;
  const reviewCount = reviews.length;
  return (
    <div styleName="reviewsContainer">
      <div styleName="reviews">
        <OverviewHeader reviewCount={reviewCount} />
        <OverviewBody reviews={reviews} />
      </div>
    </div>
  );
};

ReviewModule.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CSSModules(ReviewModule, styles, { allowMultiple: false });
