import React, { Fragment, useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import AuthorsList from '../components/AuthorsList';

const Authors = () => {
	const auth = useContext(AuthContext);
	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
	const [loadedAuthors, setLoadedAuthors] = useState();

	useEffect(() => {
		const fetchAuthors = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/v1/users?role=author`,
					'GET',
					null,
					{
						Authorization: 'Bearer ' + auth.token,
					}
				);
				// console.log(responseData.doc);
				setLoadedAuthors(responseData.doc, responseData.token);
			} catch (err) {}
		};

		fetchAuthors();
	}, [sendRequest, auth.token]);

	// console.log(loadedAuthors[0]);
	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			{isLoading && (
				<div className='center'>
					<LoadingIndicator asOverlay />
				</div>
			)}
			{!isLoading && loadedAuthors && <AuthorsList items={loadedAuthors} />}
		</Fragment>
	);
};

export default Authors;
