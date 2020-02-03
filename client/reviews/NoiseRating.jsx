import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

const NoiseRating = (props) => {
  let { noiseAverage } = props;
  noiseAverage = noiseAverage[0].toUpperCase() + noiseAverage.slice(1);
  return (
    <div styleName="ratingContainer">
      <div styleName="ratingDiv">
        <div styleName="icoContainer">
          <i styleName="inlineIco" />
        </div>
        <div styleName="ratingLabel">
          {'Noise · '}
          <span styleName="ratingSubtext">
            {noiseAverage}
          </span>
        </div>
      </div>
    </div>
  );
};

NoiseRating.propTypes = {
  noiseAverage: PropTypes.string.isRequired,
};

export default CSSModules(NoiseRating, styles, { allowMultiple: false });
