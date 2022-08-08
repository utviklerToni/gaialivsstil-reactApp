import React, { Fragment, useContext } from 'react';

import './QuoteList.css';
// import Card from '../../shared/components/UIElements/Card';
// import QuoteItem from './QuoteItem';
import QuoteItemOverview from './QuoteItemOverview';
import { AuthContext } from '../../shared/context/auth-context';
// import { Link } from "react-router-dom";

const QuoteList = (props) => {
	// console.log(props);
	const auth = useContext(AuthContext);

	if (props.items.length === 0) {
		return (
			<div className='quote-list center'>
				<h2 className='el-txt sm-txt-shadow'>
					Forfatteren har ikke lagt til noen sitater ennå.
				</h2>
			</div>
		);
	}

	return (
		<Fragment>
			<ul className='quote-grid'>
				{props.items.map((quote) => (
					<QuoteItemOverview
						key={quote._id}
						id={quote._id}
						title={quote.title}
						image={quote.image}
						author={quote.author}
						authorId={auth.authorId}
						description={quote.description}
						postedOn={quote.postedOn}
						loved={quote.loved}
						allCommentsCount={quote.allCommentsCount}
						onDelete={props.onDeleteQuote}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
