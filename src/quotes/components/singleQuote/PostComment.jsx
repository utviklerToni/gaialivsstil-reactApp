import React, { Fragment, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../shared/components/FormElements/Button';
import Input from '../../../shared/components/FormElements/Input';
import LoadingIndicator from '../../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import Modal from '../../../shared/components/UIElements/Modal/Modal';
import { AuthContext } from '../../../shared/context/auth-context';
import { useForm } from '../../../shared/hooks/formHook';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';

import './SingleQuote.css';

const PostComment = (props) => {
	const quoteId = useParams().quoteId;
	const navigate = useNavigate();

	const auth = useContext(AuthContext);

	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
	const [formState, inputHandler] = useForm(
		{
			comment: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const commentSubmitHandler = async (event) => {
		event.preventDefault();

		try {
			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/api/v1/forum/quotes/${quoteId}/comments`,
				'POST',
				JSON.stringify({
					comment: formState.inputs.comment.value,
				}),
				{
					Authorization: 'Bearer ' + auth.token,
					'Content-Type': 'application/json',
				}
			);

			// console.log(responseData);

			navigate(`/gaialivsstil-reactApp/forum/quotes/${quoteId}`, {
				replace: true,
			});
		} catch (err) {}
	};

	return (
		<Fragment>
			<Modal onClear={clearError} error={errorState} />
			<div className='gaialivsstil-bg section-feedback-bg l-space-top m-top'>
				<div className='abt-width el-txt'>
					<ul>
						<h3 className='dark-header'>
							Du kan legge inn din kommentar her.
						</h3>
						<div className='comment-advice dark-header'>
							<li className='align-left'>
								<p>
									Ord er energi, så snakk positivt om deg selv og andre.
								</p>
							</li>
							<li className='align-left'>
								<p>
									Vær en ansvarlig og snill person og unngå bruk av
									harde ord.
								</p>
							</li>
							<li className='align-left'>
								<p>
									Vi tillater ikke sletting eller redigering av
									kommentarer.
								</p>
							</li>
							<li className='align-left'>
								<p>
									Så ta deg tid, fordi hver kommentar definerer hvem du
									er.
								</p>
							</li>
						</div>
					</ul>
				</div>

				<div className='abt-width m2-txt edit-profile-card profile-card'>
					<form onSubmit={commentSubmitHandler}>
						<Input
							element='textarea'
							id='comment'
							rows='6'
							type='text'
							label=''
							validators={[VALIDATOR_REQUIRE()]}
							onInput={inputHandler}
							errorText=''
						/>

						<Button green type='submit' disabled={!formState.isValid}>
							Post
						</Button>
						{isLoading && <LoadingIndicator />}
						<Button dark to={`/forum/quotes/${quoteId}`}>
							gå tilbake
						</Button>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default PostComment;
