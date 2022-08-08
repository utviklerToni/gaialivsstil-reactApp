import React, { Fragment } from 'react';

const SingleQuoteCommentDetails = (props) => {
	return (
		<Fragment>
			<div className='user-img-comment'>
				<img
					src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
					alt=''
				/>
				<div className='c-card'>
					<p className='comment-padding-username'>
						<span className='c-user'>{props.name} </span>
						<span className='c-date'>
							on{' '}
							{new Date(props.createdAt).toLocaleDateString('en-gb', {
								day: '2-digit',
								month: 'long',
								year: 'numeric',
							})}
						</span>
					</p>
					<div className='comment-form'>
						<p className='comment-padding-text'>{props.comment}</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default SingleQuoteCommentDetails;
