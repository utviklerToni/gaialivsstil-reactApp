import React, { Fragment } from 'react';

const IconPencil = () => {
   return (
      <Fragment>
         <svg
            className='shades-icon '
            fill='currentColor'
            viewBox='0 0 16 16'
            height='16px'
            width='16px'
         >
            <title>Forfatter</title>
            <path d='M12.492 0a.5.5 0 00-.346.146l-12 12A.5.5 0 000 12.5V16h3.5a.5.5 0 00.354-.146l12-12a.5.5 0 000-.708l-3-3A.5.5 0 0012.492 0zm.008 1.207L14.793 3.5 13.5 4.793 11.207 2.5 12.5 1.207zm-2 2L12.793 5.5 5 13.293V12.5a.5.5 0 00-.5-.5H4v-.5a.5.5 0 00-.5-.5h-.793L10.5 3.207zM1.707 12H3v.5a.5.5 0 00.5.5H4v1.293L3.293 15H2v-1H1v-1.293L1.707 12z'></path>
            <path
               d='M12.5 1.207L14.793 3.5 13.5 4.793 11.207 2.5z'
               opacity='.2'
            ></path>
            <path
               d='M10.5 3.207L12.793 5.5 5 13.293V12.5a.5.5 0 00-.5-.5H4v-.5a.5.5 0 00-.5-.5h-.793z'
               opacity='.4'
            ></path>
         </svg>
      </Fragment>
   );
};

export default IconPencil;
