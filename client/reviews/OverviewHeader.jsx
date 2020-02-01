import React from 'react';
import PropTypes from 'prop-types';

const OverviewHeader = (props) => {
  const { reviewCount } = props;
  return (
    <div className="overviewHeader">
      {`What ${reviewCount} people are saying`}
    </div>
  );
};

OverviewHeader.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};

export default OverviewHeader;
