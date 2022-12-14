import React, { Fragment } from 'react';

const CheckedBox = () => {
	return (
		<Fragment>
			<svg
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 16 16'
				height='16px'
				width='16px'
				style={{ color: '#296503' }}>
				<title>checked checkbox</title>
				<path d='M3 1c-1.108 0-2 .892-2 2v10c0 1.108.892 2 2 2h10c1.108 0 2-.892 2-2V3c0-1.108-.892-2-2-2H3zm0 1h10c.154 0 .296.04.426.102-1.842 2.026-3.813 4.178-5.447 5.966L5.447 5.41 4 6.79 8.008 11C10.01 8.816 12.005 6.624 14 4.434V13c0 .554-.446 1-1 1H3c-.554 0-1-.446-1-1V3c0-.554.446-1 1-1z'></path>
				<rect
					width='12'
					height='12'
					x='2'
					y='2'
					opacity='.2'
					rx='1'
					ry='1'></rect>
			</svg>
		</Fragment>
	);
};

export default CheckedBox;
