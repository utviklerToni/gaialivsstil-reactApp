import React, { Fragment, useContext, useState } from 'react';

import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/formHook';
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import './Auth.css';
import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
	const auth = useContext(AuthContext);
	let navigate = useNavigate();
	const [signIn, setSignIn] = useState(true);
	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
	const [formState, inputHandler, setFormData] = useForm(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const authSubmitHandler = async (event) => {
		event.preventDefault();

		if (signIn) {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/v1/users/isLoggingIn`,
					'POST',
					JSON.stringify({
						email: formState.inputs.email.value,
						password: formState.inputs.password.value,
					}),
					{
						'Content-Type': 'application/json',
					}
				);

				auth.login(
					responseData.data.user._id,
					responseData.data.user.role,
					responseData.token
				);

				navigate(`/gaialivsstil-reactApp/forum/quotes`, {
					replace: true,
				});
			} catch (err) {}
		} else {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/v1/users/isSignUp`,
					'POST',
					JSON.stringify({
						name: formState.inputs.name.value,
						email: formState.inputs.email.value,
						password: formState.inputs.password.value,
						passwordConfirm: formState.inputs.passwordConfirm.value,
					}),
					{
						'Content-Type': 'application/json',
					}
				);
				auth.login(
					responseData.data.user._id,
					responseData.data.user.role,
					responseData.token
				);
			} catch (err) {}
		}
	};

	const switchToRegisterHandler = () => {
		if (!signIn) {
			setFormData(
				{
					...formState.inputs,
					name: undefined,
					passwordConfirm: undefined,
				},
				formState.inputs.email.isValid && formState.inputs.password.isValid
			);
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: '',
						isValid: false,
					},
					passwordConfirm: {
						value: '',
						isValid: false,
					},
				},
				false
			);
		}
		setSignIn((prevState) => !prevState);
	};

	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />

			{isLoading && <LoadingIndicator asOverlay />}

			<div className='auth-bg min-h m2-txt el-p-top'>
				<div className='auth-form'>
					<div className='left-right-pad3'>
						{signIn && (
							<div className='tb-space'>
								<p className='el-txt'>Sign In</p>
								<p>Skriv inn dine Gaialivsstil kontodetaljer.</p>
							</div>
						)}
						{!signIn && (
							<p className='l2-txt tb-space'>
								Opprett din Gaialivsstil-konto
							</p>
						)}
						<form onSubmit={authSubmitHandler}>
							{!signIn && (
								<Input
									element='input'
									id='name'
									type='text'
									label='Ditt Navn'
									validators={[VALIDATOR_REQUIRE()]}
									onInput={inputHandler}
									errorText='Vennligst skriv inn et navn.'
								/>
							)}

							<Input
								element='input'
								id='email'
								type='email'
								label='Din E-post'
								validators={[VALIDATOR_EMAIL()]}
								errorText='Vennligst skriv inn en gyldig e-postadresse.'
								onInput={inputHandler}
							/>

							<Input
								element='input'
								id='password'
								type='password'
								label='Passord'
								validators={[VALIDATOR_MINLENGTH(6)]}
								errorText='Passordet må ha en lengde på minimum 6.'
								onInput={inputHandler}
							/>

							{!signIn && (
								<Input
									element='input'
									id='passwordConfirm'
									type='password'
									label='Bekreft Passord'
									validators={[VALIDATOR_MINLENGTH(6)]}
									errorText='Passordet må ha en lengde på minimum 6.'
									onInput={inputHandler}
								/>
							)}

							<div className='reset-flex'>
								<Button
									green
									type='submit'
									disabled={!formState.isValid}
								>
									{signIn ? 'Logg Inn' : 'meld deg på'}
								</Button>
								{signIn ? (
									<div>
										<Link
											to='/gaialivsstil-reactApp/account/resetPassword'
											className='reset-password-link'
										>
											Glemt passordet?
										</Link>
									</div>
								) : (
									''
								)}
							</div>
						</form>

						<div className='tb-space'>
							{signIn ? (
								<Fragment>
									<p className='sm-txt'>
										Ikke registrert ennå? La oss sette deg opp.
									</p>
								</Fragment>
							) : (
								<p>Er du allerede registrert? La oss logge inn.</p>
							)}
							<Button green onClick={switchToRegisterHandler}>
								{signIn ? 'meld deg på' : 'Logg Inn'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Auth;
