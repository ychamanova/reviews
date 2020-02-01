import React from 'react';
import PropTypes from 'prop-types';

const OverviewHeader = (props) => {
  const { reviews } = props;
  const reviewCount = reviews.length;
  return (
    <div className="overviewHeader">
      {`What ${reviewCount} people are saying`}
    </div>
  );
};

OverviewHeader.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OverviewHeader;
