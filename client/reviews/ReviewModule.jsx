import React from 'react';
import PropTypes from 'prop-types';

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
  const { pageId } = props;
  return (
    <h1>
      Page Id: {pageId}
    </h1>
  );
};

ReviewModule.propTypes = {
  pageId: PropTypes.number.isRequired,
};

export default ReviewModule;
