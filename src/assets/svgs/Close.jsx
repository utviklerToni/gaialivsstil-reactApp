import React, { Fragment } from 'react';

const Close = () => {
	return (
		<Fragment>
			<div className='inline-div'>
				<svg
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					name='close-outline'
					className='icon-mobile-nav'>
					<title>close</title>
					<path d='M3.99 2.99a1 1 0 00-.697 1.717L6.586 8l-3.293 3.293a1 1 0 101.414 1.414L8 9.414l3.293 3.293a1 1 0 101.414-1.414L9.414 8l3.293-3.293a1 1 0 00-.727-1.717 1 1 0 00-.687.303L8 6.586 4.707 3.293a1 1 0 00-.717-.303z'></path>
				</svg>
			</div>
		</Fragment>
	);
};

export default Close;
