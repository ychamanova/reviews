import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

const OverviewHeader = (props) => {
  const { reviewCount } = props;
  return (
    <div styleName="overviewHeader">
      {`What ${reviewCount} People Are Saying`}
    </div>
  );
};

OverviewHeader.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};

export default CSSModules(OverviewHeader, styles, { allowMultiple: false });
