import React from 'react';

import './Dot.css';

const LoadingDotIndicator = (props) => {
   return (
      <div className='loading'>
         <div className='loading-dot'></div>
         <div className='loading-dot'></div>
         <div className='loading-dot'></div>
         <div className='loading-dot'></div>
      </div>
   );
};

export default LoadingDotIndicator;
