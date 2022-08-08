import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './QuoteScreen.css';
// import Button from '../../shared/components/FormElements/Button';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import SingleQuote from '../components/singleQuote/SingleQuote';
import { AuthContext } from '../../shared/context/auth-context';

const QuoteScreen = () => {
	const auth = useContext(AuthContext);
	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
	const [loadedQuote, setLoadedQuote] = useState();

	const quoteId = useParams().quoteId;

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/v1/forum/quotes/${quoteId}`,
					'GET',
					null,
					{
						Authorization: 'Bearer ' + auth.token,
					}
				);

				// console.log('log of quote screen', responseData.doc);
				setLoadedQuote(responseData.doc, responseData.token);
			} catch (err) {}
		};

		fetchQuote();
	}, [sendRequest, quoteId, auth.token]);

	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			{isLoading && (
				<div className='center'>
					<LoadingIndicator asOverlay />
				</div>
			)}
			{!isLoading && loadedQuote && <SingleQuote item={loadedQuote} />}
		</Fragment>
	);
};

export default QuoteScreen;