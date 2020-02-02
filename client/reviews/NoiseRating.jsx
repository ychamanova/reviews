import React from 'react';
import PropTypes from 'prop-types';

const NoiseRating = (props) => {
  let { noiseAverage } = props;
  noiseAverage = noiseAverage[0].toUpperCase() + noiseAverage.slice(1);
  return (
    <div>
      <div>
        <img src="https://cdn4.iconfinder.com/data/icons/mobile-phone-1/128/Phone_Signal_Highest-512.png" alt="" />
      </div>
      <div>
        Noise · 
        <span>
          {noiseAverage}
        </span>
      </div>
    </div>
  );
};

NoiseRating.propTypes = {
  noiseAverage: PropTypes.string.isRequired,
};

export default NoiseRating;
