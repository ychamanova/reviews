import React from 'react';
import PropTypes from 'prop-types';

const WouldRecommend = (props) => {
  const { wouldRecommendPerc } = props;
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        {wouldRecommendPerc}
        % of people 
        <span>
          would recommend it to a friend
        </span>
      </div>
    </div>
  );
};

WouldRecommend.propTypes = {
  wouldRecommendPerc: PropTypes.number.isRequired,
};

export default WouldRecommend;
