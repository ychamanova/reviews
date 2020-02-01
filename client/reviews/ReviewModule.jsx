import React from 'react';
import PropTypes from 'prop-types';

import OverviewHeader from './OverviewHeader.jsx';
import OverviewBody from './OverviewBody.jsx';

// class ReviewModule extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <h1>hello warld</h1>
//     );
//   }
// }

const ReviewModule = (props) => {
  const { reviews } = props;
  const reviewCount = reviews.length;
  return (
    <h1>
      <OverviewHeader reviewCount={reviewCount} />
      <OverviewBody reviews={reviews} />
    </h1>
  );
};

ReviewModule.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewModule;
