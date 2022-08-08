import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useHttpClient } from '../../shared/hooks/http-hook';
import { useForm } from '../../shared/hooks/formHook';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
// import Card from '../../shared/components/UIElements/Card';
import './NewQuotes.css';
import { AuthContext } from '../../shared/context/auth-context';

const UpdateQuote = () => {
	const auth = useContext(AuthContext);
	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
	const [loadedQuote, setLoadedQuote] = useState();

	let navigate = useNavigate();

	const quoteId = useParams().quoteId;

	const [formState, inputHandler, setFormData] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			author: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	// load the quote by fetching via useEffect
	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/v1/forum/quotes/${quoteId}`,
					'GET',
					null,
					{ Authorization: 'Bearer ' + auth.token }
				);

				setLoadedQuote(responseData.doc);

				setFormData(
					{
						title: {
							value: responseData.doc.title,
							isValid: true,
						},
						author: {
							value: responseData.doc.author,
							isValid: true,
						},
						description: {
							value: responseData.doc.description,
							isValid: true,
						},
					},
					true
				);
			} catch (err) {}
		};
		fetchQuote();
	}, [sendRequest, quoteId, setFormData, auth.token]);

	const updateQuoteSubmitHandler = async (event) => {
		event.preventDefault();
		try {
			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/v1/forum/quotes/${quoteId}`,
				'PATCH',
				JSON.stringify({
					title: formState.inputs.title.value,
					author: formState.inputs.author.value,
					description: formState.inputs.description.value,
				}),
				{
					Authorization: 'Bearer ' + auth.token,
					'Content-Type': 'application/json',
				}
			);
		} catch (err) {}

		navigate(`/forum/quotes/${quoteId}`, {
			replace: true,
		});
	};

	if (isLoading) {
		return (
			<div className='center'>
				<LoadingIndicator asOverlay />
			</div>
		);
	}

	if (!loadedQuote && !errorState) {
		return (
			<Fragment>
				<Button green to={`/forum/quotes`}>
					gå tilbake
				</Button>

				<div className='center'>
					<h3 className='m-txt'>
						Could not find the Quote you were looking for.
					</h3>
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			{!isLoading && loadedQuote && (
				<div className='section-feedback-bg m-top m2-txt'>
					<div style={{ minHeight: '12vh' }}></div>
					<form className='quote-form' onSubmit={updateQuoteSubmitHandler}>
						<Button green to={`/forum/quotes`}>
							gå tilbake
						</Button>
						<Input
							id='title'
							element='input'
							type='text'
							label='Tittel'
							validators={[VALIDATOR_REQUIRE()]}
							errorText='Please enter a valid title'
							onInput={inputHandler}
							initialValue={loadedQuote.title}
							initialValid={true}
						/>
						<Input
							id='author'
							element='input'
							type='text'
							label='Forfatter'
							validators={[VALIDATOR_REQUIRE()]}
							errorText='Please enter a valid author name'
							onInput={inputHandler}
							initialValue={loadedQuote.author}
							initialValid={true}
						/>
						<Input
							id='description'
							element='textarea'
							label='Beskrivelse'
							validators={[VALIDATOR_MINLENGTH(5)]}
							errorText='Please enter a valid description of minimum 5 characters.'
							onInput={inputHandler}
							initialValue={loadedQuote.description}
							initialValid={true}
						/>
						<Button type='submit' disabled={!formState.isValid}>
							Last opp sitat
						</Button>
					</form>
				</div>
			)}
		</Fragment>
	);
};

export default UpdateQuote;
