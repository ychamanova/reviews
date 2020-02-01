import React from 'react';
import PropTypes from 'prop-types';

import OverallAverage from './OverallAverage.jsx';

const OverviewBody = (props) => {
  const { reviews } = props;
  const reviewsAggregate = reviews.reduce((acc, review) => {
    acc.overallCount[review.overall] += 1;
    acc.overallAverage += review.overall;
    acc.foodAverage += review.food;
    acc.serviceAverage += review.service;
    acc.ambianceAverage += review.ambiance;
    acc.valueAverage += review.value;
    acc.noiseCount[review.noise] += 1;
    acc.wouldRecommendPerc += review.would_recommend;
    return acc;
  }, {
    overallCount: {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    },
    overallAverage: 0,
    foodAverage: 0,
    serviceAverage: 0,
    ambianceAverage: 0,
    valueAverage: 0,
    noiseCount: {
      quiet: 0,
      moderate: 0,
      loud: 0,
    },
    wouldRecommendPerc: 0,
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
  const overallAverage = calculateAverageRating(reviewsAggregate.overallAverage);
  const foodAverage = calculateAverageRating(reviewsAggregate.foodAverage);
  const serviceAverage = calculateAverageRating(reviewsAggregate.serviceAverage);
  const ambianceAverage = calculateAverageRating(reviewsAggregate.ambianceAverage);
  const valueAverage = calculateAverageRating(reviewsAggregate.valueAverage);
  const noiseAverage = calculateAverageNoise(reviewsAggregate.noiseCount);
  const wouldRecommendPerc = calculateRecommendPerc(reviewsAggregate.wouldRecommendPerc);

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
