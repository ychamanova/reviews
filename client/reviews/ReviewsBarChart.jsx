import React from 'react';
import PropTypes from 'prop-types';

import RatingBar from './RatingBar.jsx';

const ReviewsBarChart = (props) => {
  const { overallRatings } = props;
  const fiveStar = {
    label: 5,
    perc: overallRatings['5'],
  };
  const fourStar = {
    label: 4,
    perc: overallRatings['4'],
  };
  const threeStar = {
    label: 3,
    perc: overallRatings['3'],
  };
  const twoStar = {
    label: 2,
    perc: overallRatings['2'],
  };
  const oneStar = {
    label: 1,
    perc: overallRatings['1'],
  };
  return (
    <div>
      <RatingBar ratings={fiveStar} key={5} />
      <RatingBar ratings={fourStar} key={4} />
      <RatingBar ratings={threeStar} key={3} />
      <RatingBar ratings={twoStar} key={2} />
      <RatingBar ratings={oneStar} key={1} />
    </div>
  );
};

ReviewsBarChart.propTypes = {
  overallRatings: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ReviewsBarChart;
