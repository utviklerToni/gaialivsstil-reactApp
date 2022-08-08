import React, { Fragment } from 'react';

// import FeedbackCard from './FeedbackCard';
import './Feedback.css';
import slides from './reference';
import FeedbackCard from './FeedbackCard';

const paraStyles = {
	whiteSpace: 'pre-wrap',
};

const FeedbackSection = () => {
	return (
		<Fragment>
			{/* feebback section */}

			<div className='section-width'>
				<div className='sec-header m-txt cap-txt dark-header'>
					<h4>Refferanser fra klienter</h4>

					<h1>
						ord er magiske, det samme er kundens respekt for arbeidet ditt.
					</h1>
				</div>

				<div className='feedback-card-section' style={paraStyles}>
					<FeedbackCard slides={slides} />
				</div>
			</div>
		</Fragment>
	);
};

export default FeedbackSection;
