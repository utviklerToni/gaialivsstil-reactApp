import React, { Fragment } from 'react';

const Pause = () => {
	return (
		<Fragment>
			<span className='icon-modified-shades'>
				<svg
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					height='32px'
					width='32px'>
					<title>pause</title>
					<path d='M3 1c-1.108 0-2 .892-2 2v10c0 1.108.892 2 2 2h2c1.108 0 2-.892 2-2V3c0-1.108-.892-2-2-2H3zm8 0c-1.108 0-2 .892-2 2v10c0 1.108.892 2 2 2h2c1.108 0 2-.892 2-2V3c0-1.108-.892-2-2-2h-2zM3 2h2c.554 0 1 .446 1 1v10c0 .554-.446 1-1 1H3c-.554 0-1-.446-1-1V3c0-.554.446-1 1-1zm8 0h2c.554 0 1 .446 1 1v10c0 .554-.446 1-1 1h-2c-.554 0-1-.446-1-1V3c0-.554.446-1 1-1z'></path>
					<path
						d='M3 2c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h2c.554 0 1-.446 1-1V3c0-.554-.446-1-1-1H3zm8 0c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h2c.554 0 1-.446 1-1V3c0-.554-.446-1-1-1h-2z'
						opacity='.2'></path>
				</svg>
			</span>
		</Fragment>
	);
};

export default Pause;
