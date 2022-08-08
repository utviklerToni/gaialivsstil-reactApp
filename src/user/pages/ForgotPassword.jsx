import React, { Fragment } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import { useForm } from '../../shared/hooks/formHook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { VALIDATOR_EMAIL } from '../../shared/util/validators';

const ForgotPassword = () => {
	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

	const [formState, inputHandler] = useForm({
		email: {
			value: '',
			isValid: false,
		},
	});

	const resetPasswordHandler = async (event) => {
		event.preventDefault();

		try {
			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/v1/users/forgotPassword`,
				'POST',
				JSON.stringify({
					email: formState.inputs.email.value,
				}),
				{
					'Content-Type': 'application/json',
				}
			);
		} catch (err) {}
	};

	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			{isLoading && <LoadingIndicator asOverlay />}
			<div className='gaialivsstil-bg section-feedback-bg l-space-top m-top'>
				<div className='card-forgot profile-card'>
					<h1 className='el-txt'>Gaialivsstil</h1>
					<h3 className='m-txt'>Tilbakstill ditt passord</h3>

					<p className='m2-txt'>
						For å tilbakestille passordet ditt, skriv inn e-posten din
						nedenfor og send inn. En e-post vil bli sendt til deg med
						instruksjoner for å fullføre prosessen.
					</p>

					<form onSubmit={resetPasswordHandler}>
						<Input
							element='input'
							id='email'
							type='email'
							label='E-post'
							validators={[VALIDATOR_EMAIL()]}
							errorText='Hva var e-posten du brukte til å registrere hos Gaialivsstil?'
							onInput={inputHandler}
						/>
						<Button type='submit' disabled={!formState.isValid}>
							sende inn
						</Button>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default ForgotPassword;
