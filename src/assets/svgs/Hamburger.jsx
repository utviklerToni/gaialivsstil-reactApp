import React, { Fragment } from 'react';

import '../../Bjørns/components/Header/header.css';

const Hamburger = (props) => {
  return (
    <Fragment>
      <svg
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        name='menu-outline'
        className='icon-mobile-nav'
      >
        <title>hamburger menu</title>
        <path d='M13.5 1c.822 0 1.5.678 1.5 1.5v1c0 .822-.678 1.5-1.5 1.5h-11C1.678 5 1 4.322 1 3.5v-1C1 1.678 1.678 1 2.5 1zm0 1h-11c-.286 0-.5.214-.5.5v1c0 .286.214.5.5.5h11c.286 0 .5-.214.5-.5v-1c0-.286-.214-.5-.5-.5zm0 4c.822 0 1.5.678 1.5 1.5v1c0 .822-.678 1.5-1.5 1.5h-11C1.678 10 1 9.322 1 8.5v-1C1 6.678 1.678 6 2.5 6zm0 1h-11c-.286 0-.5.214-.5.5v1c0 .286.214.5.5.5h11c.285 0 .5-.214.5-.5v-1c0-.286-.215-.5-.5-.5zm0 4c.822 0 1.5.678 1.5 1.5v1c0 .822-.678 1.5-1.5 1.5h-11c-.822 0-1.5-.678-1.5-1.5v-1c0-.822.678-1.5 1.5-1.5zm0 1h-11c-.286 0-.5.214-.5.5v1c0 .286.214.5.5.5h11c.286 0 .5-.214.5-.5v-1c0-.286-.214-.5-.5-.5z'></path>
        <path d='M14 2v2H2V2zm0 5v2H2V7zm0 5v2H2v-2z' opacity='.2'></path>
      </svg>
    </Fragment>
  );
};

export default Hamburger;
