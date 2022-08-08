import React, { Fragment } from 'react';

import Button from '../../../shared/components/FormElements/Button';

import './SingleQuote.css';
// import IconHeart from '../../../assets/svgs/IconHeart';
// import IconTrash from '../../../assets/svgs/IconTrash';
import { Link } from 'react-router-dom';
// import Modal from '../../../shared/components/UIElements/Modal/Modal';
import SingleQuoteCommentDetails from './SingleQuoteCommentDetails';
// import { useNavigate } from 'react-router-dom';

const SingleQuote = (props) => {
	const currentQuoteId = props.item.id;

	return (
		<Fragment>
			<div className='gaialivsstil-bg section-feedback-bg'>
				<div className='btn-space'>
					<div>
						<Button dark to={`/forum/quotes`}>
							Gå tilbake
						</Button>
					</div>
					<div className='quote-image'>
						<div className=''>
							<img
								src={`${process.env.REACT_APP_ASSET_URL}/${props.item.image}`}
								alt={props.item.title}
								className='author-card desc-img-shadow'
							/>
							<div className='temp_flex m2-txt'>
								{/* <IconHeart onClick={submitLikeHandler} />
                        <p>{lovedArray.length} people Loved it.</p> */}
							</div>
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
									to={`/forum/quotes/${currentQuoteId}/createComment`}
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
