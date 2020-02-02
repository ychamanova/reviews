import React from 'react';
import PropTypes from 'prop-types';

import OverallAverage from './OverallAverage.jsx';
import ScoresAverages from './ScoresAverages.jsx';

const ReviewsSummary = (props) => {
  const { summaryData } = props;
  const { overallAverage } = summaryData;
  return (
    <div>
      <div className="strong">Overall ratings and reviews</div>
      <div>Reviews can only be made by diners who have eaten at this restaraunt</div>
      <OverallAverage overallAverage={overallAverage} />
      <ScoresAverages summaryData={summaryData} />
    </div>
  );
};

ReviewsSummary.propTypes = {
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

export default ReviewsSummary;
