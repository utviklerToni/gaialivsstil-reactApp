import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';

// disabled until better 3rd party service is found
// import ImageUpload from '../../shared/components/ImageUpload/ImageUpload';
import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/formHook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import {
	VALIDATOR_EMAIL,
	VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

const EditProfile = (props) => {
	const auth = useContext(AuthContext);
	let navigate = useNavigate();
	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
	const [loadedUserDetails, setLoadedUserDetails] = useState();

	const [formState, inputHandler, setFormData] = useForm(
		{
			name: {
				value: '',
				isValid: false,
			},

			email: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	useEffect(() => {
		const fetchUserDetails = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/v1/users/me`,
					'GET',
					null,
					{ Authorization: 'Bearer ' + auth.token }
				);

				setLoadedUserDetails(responseData.doc);

				setFormData(
					{
						name: {
							value: responseData.doc.name,
							isValid: true,
						},
						email: {
							value: responseData.doc.email,
							isValid: true,
						},
						image: {
							value: responseData.doc.image,
							isValid: true,
						},
					},
					true
				);
			} catch (err) {}
		};

		fetchUserDetails();
	}, [sendRequest, setFormData, auth.token]);

	const updateUserDetailsHanlder = async (event) => {
		event.preventDefault();

		try {
			const formData = new FormData();

			formData.append('name', formState.inputs.name.value);
			formData.append('email', formState.inputs.email.value);
			formData.append('image', formState.inputs.image.value);

			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/v1/users/updateMyProfile`,
				'PATCH',
				formData,
				{
					Authorization: 'Bearer ' + auth.token,
				}
			);
		} catch (err) {}

		navigate(`/user/account/myProfile`, {
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

	if (!loadedUserDetails && !errorState) {
		return (
			<Fragment>
				<Button green to={`/forum/quotes`}>
					gå tilbake
				</Button>

				<div className='center'>
					<h3>
						Could not load user details, please visit later. If problem
						persist then contact us via email or phone.
					</h3>
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			{!isLoading && loadedUserDetails && (
				<div className='gaialivsstil-bg section-feedback-bg l-space-top m-top'>
					<div className='abt-width el-txt centered'>
						<h1>Rediger profilen din.</h1>
					</div>
					<div className='abt-width m2-txt edit-profile-card profile-card'>
						<form onSubmit={updateUserDetailsHanlder}>
							{/* Change my profile picture. */}
							<div className='el-txt'>
								{/* <ImageUpload
                           id='image'
                           onInput={inputHandler}
                           errorText={``}
                        /> */}

								<Input
									element='input'
									id='name'
									type='text'
									label='Your Name'
									validators={[VALIDATOR_REQUIRE()]}
									onInput={inputHandler}
									errorText='Please enter a name.'
									initialValue={loadedUserDetails.name}
									initialValid={true}
								/>

								<Input
									element='input'
									id='email'
									type='email'
									label='Email address'
									validators={[VALIDATOR_EMAIL()]}
									errorText='Please enter a valid email.'
									onInput={inputHandler}
									initialValue={loadedUserDetails.email}
									initialValid={true}
								/>

								<Button dark to='/user/account/myProfile'>
									gå tilbake
								</Button>
								<Button
									type='submit'
									green
									disabled={!formState.isValid}
								>
									Lagre
								</Button>
							</div>
						</form>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default EditProfile;
