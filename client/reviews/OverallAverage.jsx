import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

const OverallAverage = (props) => {
  const { overallAverage } = props;
  const ratingsArray = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < overallAverage) {
      ratingsArray.push(<i styleName="starChecked" key={i} className="fas fa-star" />);
    } else {
      ratingsArray.push(<i styleName="starChecked" key={i} className="far fa-star" />);
    }
  }
  return (
    <div styleName="overallAverage">
      <div styleName="overallStars">
        {ratingsArray}
      </div>
      <div>
        <span styleName="overallInline">
          {overallAverage}
        </span>
        <span styleName="overallInline">
          based on recent ratings
        </span>
      </div>
    </div>
  );
};

OverallAverage.propTypes = {
  overallAverage: PropTypes.number.isRequired,
};

export default CSSModules(OverallAverage, styles, { allowMultiple: false });
