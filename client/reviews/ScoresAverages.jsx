import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

const ScoresAverages = (props) => {
  const { summaryData } = props;
  const {
    foodAverage,
    serviceAverage,
    ambianceAverage,
    valueAverage,
  } = summaryData;
  return (
    <div styleName="scoresAverages">
      <div styleName="scoreContainer">
        <div styleName="scoreNumber">
          {foodAverage}
        </div>
        <div styleName="scoreLabel">
          Food
        </div>
      </div>
      <div styleName="scoreContainer">
        <div styleName="scoreNumber">
          {serviceAverage}
        </div>
        <div styleName="scoreLabel">
          Service
        </div>
      </div>
      <div styleName="scoreContainer">
        <div styleName="scoreNumber">
          {ambianceAverage}
        </div>
        <div styleName="scoreLabel">
          Ambiance
        </div>
      </div>
      <div styleName="scoreContainerEnd">
        <div styleName="scoreNumber">
          {valueAverage}
        </div>
        <div styleName="scoreLabel">
          Value
        </div>
      </div>
    </div>
  );
};

ScoresAverages.propTypes = {
  summaryData: PropTypes.shape({
    overallAverage: PropTypes.number.isRequired,
    foodAverage: PropTypes.number.isRequired,
    serviceAverage: PropTypes.number.isRequired,
    ambianceAverage: PropTypes.number.isRequired,
    valueAverage: PropTypes.number.isRequired,
    noiseAverage: PropTypes.string.isRequired,
    wouldRecommendPerc: PropTypes.number.isRequired,
  }).isRequired,
};

export default CSSModules(ScoresAverages, styles, { allowMultiple: false });
