import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = (props) => {
  const { ratings } = props;
  return (
    <div>
      <span>
        {ratings.label}
      </span>
      <div>
        percent to fill ratings bar: 
        {ratings.perc}
      </div>
    </div>
  );
};

RatingBar.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default RatingBar;
