import React, { Fragment } from 'react';

// import Form from './Form';
import './Form.css';
import './EmailUsQueries.css';

const EmailForm = () => {
	return (
		<Fragment>
			<section className='section-cta'>
				<div className='cta'>
					<div className='cta-text-box'>
						<h2 className='heading-secondary'>Føler du deg hjelpesløs?</h2>

						<div className='cta-text cta-box'>
							<p>
								Føler du deg stresset ? {/* <br /> */}
								Er du lei av å omgi deg med negative tanker?{' '}
								{/* <br /> */}
								Er du mentalt sliten og tom for energi?
							</p>
							<p>To kontakt nå i så fall.</p>
							<span>EMail: hildelunde@gaialivsstil.no</span>
							<br />
							<span>Phone: +47-41185016</span>
						</div>

						{/* form section */}

						{/* <Form /> */}
					</div>
					<div
						className='cta-img-box'
						role={'img'}
						aria-label={'A Gentle man eating his meal.'}
					></div>
				</div>
			</section>
		</Fragment>
	);
};

export default EmailForm;
