import React, { Fragment, useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import { useHttpClient } from '../../shared/hooks/http-hook';
import QuoteList from '../components/QuoteList';
import { AuthContext } from '../../shared/context/auth-context';
import '../../author/components/AuthorsList.css';

const AuthorQuotes = () => {
	const auth = useContext(AuthContext);

	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
	const [loadedQuotes, setLoadedQuotes] = useState();

	useEffect(() => {
		const fetchQuotes = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/v1/forum/quotes`,
					'GET',
					null,
					{
						Authorization: 'Bearer ' + auth.token,
					}
				);

				setLoadedQuotes(responseData.doc, responseData.token);
			} catch (err) {}
		};
		fetchQuotes();
	}, [sendRequest, auth.token]);

	const deleteQuoteHandler = (deletedQuoteId) => {
		setLoadedQuotes((prevQuote) =>
			prevQuote.filter((quote) => quote.id !== deletedQuoteId)
		);
	};

	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			{isLoading && (
				<div className='center'>
					<LoadingIndicator asOverlay />
				</div>
			)}
			<div className='gaialivsstil-bg forum-heading p-top section-feedback-bg'>
				{!isLoading && loadedQuotes && (
					<Fragment>
						<h1 className='welcome-forum-text'>
							Velkommen til vårt Forum
						</h1>
						<QuoteList
							items={loadedQuotes}
							onDeleteQuote={deleteQuoteHandler}
						/>
					</Fragment>
				)}
			</div>
		</Fragment>
	);
};

export default AuthorQuotes;
