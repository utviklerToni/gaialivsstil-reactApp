import React, { Fragment } from 'react';

const Home = () => {
	return (
		<Fragment>
			<span className='icon-modified-shades'>
				<svg
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					height='32px'
					width='32px'>
					<title>home</title>
					<path
						d='M8 1L2 4.75V14h4V9c0-1.108.892-2 2-2s2 .892 2 2v5h4V4.75z'
						opacity='.2'></path>
					<path d='M8 0L0 5v1l1-.625V15h14V5.375L16 6V5l-2-1.25V0h-2v2.5zm0 1l4 2.5 2 1.25V14h-3V9c0-1.662-1.338-3-3-3S5 7.338 5 9v5H2V4.75zm0 6a2 2 0 012 2v5H6V9a2 2 0 012-2z'></path>
					<path d='M8 7a2 2 0 012 2v5H6V9a2 2 0 012-2z' opacity='.1'></path>
				</svg>
			</span>
		</Fragment>
	);
};

export default Home;
