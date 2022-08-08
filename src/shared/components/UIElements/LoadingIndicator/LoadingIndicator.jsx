import React from 'react';

// import './Dot.css';

import './LoadingSpinner.css';

const LoadingIndicator = (props) => {
   return (
      // <div className='loading'>
      //    <div className='loading-dot'></div>
      //    <div className='loading-dot'></div>
      //    <div className='loading-dot'></div>
      //    <div className='loading-dot'></div>
      // </div>
      <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
         <div className='lds-dual-ring'></div>
      </div>
   );
};

export default LoadingIndicator;
