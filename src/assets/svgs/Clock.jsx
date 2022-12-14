import React, { Fragment } from 'react';

const Clock = () => {
	return (
		<Fragment>
			<span className='icon-modified-shades'>
				<svg
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					height='32px'
					width='32px'>
					<title>clock</title>
					<path
						d='M15 8a7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7z'
						opacity='.2'></path>
					<path d='M8 0C2.812-.197-1.359 5.47.357 10.363 1.64 15.067 7.64 17.5 11.834 15.02c3.257-1.722 4.973-5.862 3.809-9.383C14.67 2.344 11.43-.047 8 0zm0 1c4.618-.177 8.283 4.957 6.62 9.268-1.014 3.193-4.56 5.263-7.83 4.62-3.51-.54-6.18-4.063-5.755-7.587C1.32 3.81 4.497.935 8 1zm3.506 2.994a.5.5 0 00-.383.176L7.771 8H4.5c-.676-.01-.676 1.01 0 1h3.48a.502.502 0 00.124-.01.5.5 0 00.32-.215l3.453-3.945a.5.5 0 00-.371-.836z'></path>
				</svg>
			</span>
		</Fragment>
	);
};

export default Clock;
