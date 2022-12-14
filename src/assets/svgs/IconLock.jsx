import React, { Fragment } from 'react';

const IconLock = () => {
   return (
      <Fragment>
         <svg
            className='shades-icon '
            fill='currentColor'
            viewBox='0 0 16 16'
            height='16px'
            width='16px'
         >
            <title>Logg Inn</title>
            <rect
               width='13'
               height='9'
               x='1.5'
               y='6.5'
               opacity='.3'
               rx='1.5'
               ry='1.5'
            ></rect>
            <path d='M8 0a5 5 0 00-5 5v1c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2V5a5 5 0 00-5-5zm0 1c2.225 0 4 1.775 4 4v1h-1V5c0-1.653-1.347-3-3-3S5 3.347 5 5v1H4V5c0-2.225 1.775-4 4-4zm0 2c1.117 0 2 .883 2 2v1H6V5c0-1.117.883-2 2-2zM3 7h10c.563 0 1 .437 1 1v6c0 .563-.437 1-1 1H3c-.563 0-1-.437-1-1V8c0-.563.437-1 1-1zm5 2a1 1 0 00-1 1 1 1 0 00.684.947L7 13h2l-.684-2.05A1 1 0 009 10a1 1 0 00-1-1z'></path>
            <path
               d='M8 .5A4.49 4.49 0 003.5 5v1.5h2V5c0-1.385 1.115-2.5 2.5-2.5s2.5 1.115 2.5 2.5v1.5h2V5A4.49 4.49 0 008 .5z'
               opacity='.2'
            ></path>
         </svg>
      </Fragment>
   );
};

export default IconLock;
