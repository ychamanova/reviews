import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

import OverallAverage from './OverallAverage.jsx';
import ScoresAverages from './ScoresAverages.jsx';
import NoiseRating from './NoiseRating.jsx';
import WouldRecommend from './WouldRecommend.jsx';

const ReviewsSummary = (props) => {
  const { summaryData } = props;
  const { overallAverage, noiseAverage, wouldRecommendPerc } = summaryData;
  return (
    <div>
      <div styleName="summaryHeader">Overall ratings and reviews</div>
      <div styleName="summarySubtext">Reviews can only be made by diners who have eaten at this restaraunt</div>
      <OverallAverage overallAverage={overallAverage} />
      <ScoresAverages summaryData={summaryData} />
      <NoiseRating noiseAverage={noiseAverage} />
      <WouldRecommend wouldRecommendPerc={wouldRecommendPerc} />
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

export default CSSModules(ReviewsSummary, styles, { allowMultiple: false });
