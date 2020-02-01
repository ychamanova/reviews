import React from 'react';
import PropTypes from 'prop-types';

const OverallAverage = (props) => {
  const { overallAverage } = props;
  const ratingsArray = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < overallAverage) {
      ratingsArray.push(<span className="star checked" key={i}>S</span>);
    } else {
      ratingsArray.push(<span className="star" key={i}>N</span>);
    }
  }
  return (
    <div>
      {ratingsArray}
      {` ${overallAverage} based on recent ratings`}
    </div>
  );
};

OverallAverage.propTypes = {
  overallAverage: PropTypes.number.isRequired,
};

export default OverallAverage;
