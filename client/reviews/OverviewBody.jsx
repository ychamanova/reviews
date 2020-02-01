import React from 'react';
import PropTypes from 'prop-types';

import OverallAverage from './OverallAverage.jsx';

const OverviewBody = (props) => {
  const { reviews } = props;
  const reviewsAggregate = reviews.reduce((acc, review) => {
    acc.overallCount[review.overall] += 1;
    acc.overallSum += review.overall;
    acc.foodSum += review.food;
    acc.serviceSum += review.service;
    acc.ambianceSum += review.ambiance;
    acc.valueSum += review.value;
    acc.noiseCount[review.noise] += 1;
    acc.wouldRecommendSum += review.would_recommend;
    return acc;
  }, {
    overallCount: {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    },
    overallSum: 0,
    foodSum: 0,
    serviceSum: 0,
    ambianceSum: 0,
    valueSum: 0,
    noiseCount: {
      quiet: 0,
      moderate: 0,
      loud: 0,
    },
    wouldRecommendSum: 0,
  });
  function calculateAverageRating(ratingSum) {
    return parseFloat((ratingSum / reviews.length).toFixed(1));
  }
  function calculateAverageNoise(noiseObj) {
    let largest = 0;
    let result = '';
    const keys = Object.keys(noiseObj);
    keys.forEach((key) => {
      if (noiseObj[key] > largest) {
        largest = noiseObj[key];
        result = key;
      }
    });
    return result;
  }
  function calculateRecommendPerc(recommendSum) {
    return parseFloat((recommendSum / reviews.length * 100).toFixed(0));
  }
  const overallAverage = calculateAverageRating(reviewsAggregate.overallSum);
  const foodAverage = calculateAverageRating(reviewsAggregate.foodSum);
  const serviceAverage = calculateAverageRating(reviewsAggregate.serviceSum);
  const ambianceAverage = calculateAverageRating(reviewsAggregate.ambianceSum);
  const valueAverage = calculateAverageRating(reviewsAggregate.valueSum);
  const noiseAverage = calculateAverageNoise(reviewsAggregate.noiseCount);
  const wouldRecommendPerc = calculateRecommendPerc(reviewsAggregate.wouldRecommendSum);

  console.log(reviews);
  console.log(reviewsAggregate);
  return (
    <div>
      <div className="strong">Overall ratings and reviews</div>
      <div>Reviews can only be made by diners who have eaten at this restaraunt</div>
      <OverallAverage overallAverage={overallAverage} />
    </div>
  );
};

OverviewBody.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OverviewBody;
