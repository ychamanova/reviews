import React from 'react';
import PropTypes from 'prop-types';

const ScoresAverages = (props) => {
  const { summaryData } = props;
  const {
    foodAverage,
    serviceAverage,
    ambianceAverage,
    valueAverage,
  } = summaryData;
  return (
    <div>
      <div>
        <div>
          {foodAverage}
        </div>
        <div>
          Food
        </div>
      </div>
      <div>
        <div>
          {serviceAverage}
        </div>
        <div>
          Service
        </div>
      </div>
      <div>
        <div>
          {ambianceAverage}
        </div>
        <div>
          Ambiance
        </div>
      </div>
      <div>
        <div>
          {valueAverage}
        </div>
        <div>
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

export default ScoresAverages;
