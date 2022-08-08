import React, { Fragment, useContext, useState } from 'react';

// import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './QuoteItemOverview.css';

import Modal from '../../shared/components/UIElements/Modal/Modal';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
// import IconHeart from '../../assets/svgs/IconHeart';
import IconChat from '../../assets/svgs/IconChat';
// import { useNavigate } from 'react-router-dom';
// import Backdrop from '../../shared/components/UIElements/Backdrop';
// import { Link } from 'react-router-dom';
const QuoteItemOverview = (props) => {
	const auth = useContext(AuthContext);

	const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

	const [showConfirmModal, setShowConfirmModal] = useState(false);

	const showWarningHandler = () => {
		setShowConfirmModal(true);
	};

	const cancelDeleteHandler = () => {
		setShowConfirmModal(false);
	};

	const confirmDeleteHandler = async () => {
		setShowConfirmModal(false);
		try {
			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/api/v1/forum/quotes/${props.id}`,
				'DELETE',
				null,
				{
					Authorization: 'Bearer ' + auth.token,
				}
			);
		} catch (err) {}

		props.onDelete(props.id);
	};

	let adminFunctionality;

	const currentDate = props.postedOn;

	const parsedPostedOn = new Date(currentDate).toLocaleDateString('en-gb', {
		dateStyle: 'full',
	});

	if (auth.isLoggedIn && auth.role === 'author') {
		adminFunctionality = (
			<div className='quote-item__actions'>
				<Fragment>
					<Button
						dark
						to={`/gaialivsstil-reactApp/forum/admin/editQuote/${props.id}`}
					>
						Redigere
					</Button>
					<Button danger onClick={showWarningHandler}>
						Slett
					</Button>
				</Fragment>
			</div>
		);
	}

	return (
		// due to portal it wont be rendered above the list below but on top of the side drawer portal in index.html

		<Fragment>
			<ErrorModal error={errorState} onClear={clearError} />
			<Modal
				show={showConfirmModal}
				onCancel={cancelDeleteHandler}
				header='WARNING !!!'
				footer={
					<Fragment>
						<Button green onClick={cancelDeleteHandler}>
							Cancel
						</Button>
						<Button dark onClick={confirmDeleteHandler}>
							Delete
						</Button>
					</Fragment>
				}
			>
				<p style={{ color: '#001122' }}>
					This cannot be recovered and you will lose all the discussion on
					this Quote.
				</p>
			</Modal>
			<li className='quote-item'>
				<div className='quote-item__contents quote-card'>
					{isLoading && <LoadingIndicator asOverlay />}
					<div className='quote-item__image'>
						<img
							src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
							alt={props.title}
						/>
					</div>
					<div className='quote-flex'>
						<div className='quote-item__info quote-card-text-color'>
							{/* <h5 className='m-txt'>Author</h5> */}
							<h3 className='m-txt'>{props.title}</h3>
							<h5 className='m-txt author-highlight'>{props.author}</h5>
							<div className='ellipsis-text'>
								<p>{props.description}</p>
							</div>
							<Button
								dark
								inverse
								to={`/gaialivsstil-reactApp/forum/quotes/${props.id}`}
							>
								LES MER
							</Button>
							<div
								style={{ display: 'flex', gap: '18px' }}
								className='m-txt'
							>
								{/* <div
                           style={{
                              display: 'flex',
                              gap: '3px',
                              alignItems: 'center',
                           }}
                        >
                           <IconHeart />
                           <p>{props.loved.length} Loved</p>
                        </div> */}
								<div className='chat-flex'>
									<IconChat />
									<p>
										{props.allCommentsCount === 1
											? `${props.allCommentsCount} kommentar`
											: `${props.allCommentsCount} kommentarer`}
									</p>
								</div>
							</div>
							<p className='m-txt'>Postet på</p>
							<p className='m-txt postedOn-bg'>{parsedPostedOn}</p>
						</div>

						{auth.role === 'author' && adminFunctionality}
					</div>
				</div>
			</li>
		</Fragment>
	);
};

export default QuoteItemOverview;
