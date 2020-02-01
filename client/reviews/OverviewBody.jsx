import React from 'react';
import PropTypes from 'prop-types';

const OverviewBody = (props) => {
  return (
    <div>
      <div>Overall ratings and reviews</div>
      <div>Reivews can only be made by diners who have eaten at this restaraunt</div>
    </div>
  );
};

OverviewBody.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OverviewBody;
