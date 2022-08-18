import React, { Fragment } from 'react';

import Button from '../../../shared/components/FormElements/Button';

import './SingleQuote.css';
import { Link } from 'react-router-dom';
import SingleQuoteCommentDetails from './SingleQuoteCommentDetails';

const SingleQuote = (props) => {
	const currentQuoteId = props.item.id;

	return (
		<Fragment>
			<div className='gaialivsstil-bg section-feedback-bg'>
				<div className='btn-space'>
					<div>
						<Button dark to={`/gaialivsstil-reactApp/forum/quotes`}>
							Gå tilbake
						</Button>
					</div>
					<div className='quote-image'>
						<div className=''>
							<img
								src={`${props.item.image}`}
								alt={props.item.title}
								className='author-card desc-img-shadow'
							/>
							<div className='temp_flex m2-txt'></div>
						</div>
						<div className='quote-flex f-dir m2-txt'>
							<div className='quote-description quote-description__card m-lineH'>
								<h2>{props.item.title}</h2>
								<h3>{props.item.author}</h3>
								<p>Beskrivelse: {props.item.description}</p>
							</div>
							<div className='quote-description__card m-lineH'>
								<h3>Kommentarer: </h3>
								{props.item.allComments.length === 0 && (
									<div className='comment-form'>
										<p>Ingen kommentarer enda!</p>
									</div>
								)}

								<Link
									to={`/gaialivsstil-reactApp/forum/quotes/${currentQuoteId}/createComment`}
								>
									<span className='simple-anchor'>
										Klikk her for å skrive en kommentar.
									</span>
								</Link>
								<li>
									{props.item.allComments.map((items) => (
										<SingleQuoteCommentDetails
											key={items.id}
											image={items.user.image}
											name={items.user.name}
											createdAt={items.createdAt}
											comment={items.comment}
										/>
									))}
								</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default SingleQuote;
