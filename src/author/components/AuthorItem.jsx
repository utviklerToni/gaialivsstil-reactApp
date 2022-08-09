import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
// import Card from '../../shared/components/UIElements/Card';
import './AuthorItem.css';

const AuthorItem = (props) => {
	return (
		<Fragment>
			<li className='userListItem author-card'>
				{/* <Card> */}
				<Link to={`/forum/quotes`}>
					<Avatar
						image={`${process.env.REACT_APP_ASSET_URL}/images/${props.image}`}
						alt={props.name}
					/>
					<div style={{ padding: '18px' }} className='m2-txt'>
						<h3>{props.name}</h3>

						<p style={{ textTransform: 'capitalize' }}>{props.role}</p>
						<p>Contact Author: {props.email}</p>

						{/* <h3>
                     {props.quoteCount}
                     {props.quoteCount <= 1 ? 'Quote' : 'Quotes'}
                  </h3> */}
					</div>
				</Link>
				{/* </Card> */}
			</li>
		</Fragment>
	);
};

export default AuthorItem;
