import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../shared/hooks/formHook';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import './NewQuotes.css';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
// import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';

import ImageUpload from '../../shared/components/ImageUpload/ImageUpload';
import LoadingDotIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingDotIndicator';

const NewQuotes = () => {
	const auth = useContext(AuthContext);

	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

	const navigate = useNavigate();

	const [formState, inputHandler] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			author: {
				value: '',
				isValid: false,
			},
			image: {
				value: null,
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const submitQuoteHandler = async (event) => {
		event.preventDefault();

		try {
			const formData = new FormData();

			formData.append('title', formState.inputs.title.value);
			formData.append('author', formState.inputs.author.value);
			formData.append('image', formState.inputs.image.value);
			formData.append('description', formState.inputs.description.value);

			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/v1/forum/quotes`,
				'POST',
				formData,
				{
					Authorization: 'Bearer ' + auth.token,
				}
			);

			// only valid if we are sending JSON, if included images, then change it to above
			// await sendRequest(
			//    'http://localhost:4000/api/v1/forum/quotes',
			//    'POST',
			//    JSON.stringify({
			//       title: formState.inputs.title.value,
			//       author: formState.inputs.author.value,
			//       authorId: auth.authorId,
			//       description: formState.inputs.description.value,
			//       image: formState.inputs.image.value,
			//    }),
			//    {
			//       Authorization: 'Bearer ' + auth.token,
			//       'Content-Type': 'application/json',
			//    }
			// );
			// console.log(auth);

			navigate(`/forum/quotes`, { replace: true });
		} catch (err) {}
	};

	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			{isLoading && <LoadingDotIndicator />}
			<div className='section-feedback-bg gaialivsstil-bg'>
				<div className='new-q-pad m-top'>
					<form className='quote-form' onSubmit={submitQuoteHandler}>
						<div className='m2-txt'>
							<Button green to='/admin'>
								gå tilbake
							</Button>

							<h3>Hei Hilde,</h3>
							<h2>Velkommen.</h2>
							<br />
							<p className='m2-txt' style={{ marginBottom: '3rem' }}>
								Er du klar til å laste opp sitaet ditt?
							</p>
						</div>

						<div className='m2-txt'>
							<Input
								id='title'
								element='input'
								type='text'
								label='Tittel'
								validators={[VALIDATOR_REQUIRE()]}
								errorText='Please enter a valid title.'
								onInput={inputHandler}
							/>

							<Input
								id='author'
								element='input'
								label='Forfatter'
								validators={[VALIDATOR_REQUIRE()]}
								errorText='Please enter author name.'
								onInput={inputHandler}
							/>

							{/* <Input
                     id='authorId'
                     element='input'
                     label='Author Id'
                     validators={[VALIDATOR_REQUIRE()]}
                     errorText={`Please enter your AUTHOR ID. If you're not sure, please contact your developer.`}
                     onInput={inputHandler}
                  /> */}

							<ImageUpload
								id='image'
								onInput={inputHandler}
								errorText={``}
							/>

							<Input
								id='description'
								element='textarea'
								label='Beskrivelse'
								validators={[VALIDATOR_MINLENGTH(5)]}
								errorText='Please enter a valid description of minimum 5 characters.'
								onInput={inputHandler}
							/>

							<div className='upload-btn-flex'>
								<Button type='submit' disabled={!formState.isValid}>
									Oppdater sitat
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default NewQuotes;
