import React, { Fragment } from 'react';

import './HomeSectionGrid.css';

const HomeSectionGrid = ({
	gridImg,
	gridCardHeaderTitle,
	gridCardQuote,
	gridImgFileName,
}) => {
	return (
		<Fragment>
			<div className='grid-card card-shadow'>
				<img src={gridImg} alt={gridImgFileName} className='sec-grid-img' />
				<div className='card-txt'>
					<div className='sm-space'>
						<p className='card-txt-header'>{gridCardHeaderTitle}</p>
					</div>
					<div className='sm-space-btm'>
						<p className='card-txt m2-txt'>{gridCardQuote}</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default HomeSectionGrid;
