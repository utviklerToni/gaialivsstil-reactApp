import React, { Fragment } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Avatar from '../../shared/components/UIElements/Avatar';
import IconPencil from '../../assets/svgs/IconPencil';
import './UserProfile.css';

const UserProfile = (props) => {
	const parseDate = new Date(props.item.createdOn).toLocaleDateString('en-gb', {
		dateStyle: 'full',
	});

	const userTitleStyle = {
		textTransform: 'uppercase',
	};
	return (
		<Fragment>
			<div className='gaialivsstil-bg min-h l-space-top m-top m-btm'>
				<div className='profile-width'>
					<h1 className='el-txt dark-header'>
						Hei <span style={userTitleStyle}> {props.item.name},</span>
					</h1>
					<h1 className='el-txt'>Velkommen til profilen din.</h1>
					<p className='m-txt'>Her kan du oppdatere detaljene dine..</p>
				</div>
				<div className='m2-txt quote-item__contents profile-card'>
					<div className='quote-item__image'>
						<Avatar image={`${props.item.image}`} alt={props.item.name} />
					</div>
					<div className='profile-card__flex profile-card-edit'>
						<div className='profile-text m-txt'>
							<p>Navn: {props.item.name}</p>
							<p>E-post: {props.item.email}</p>
							{props.item.role === 'author' && (
								<p>Rolle: {props.item.role}</p>
							)}
							<p>Ble med på: {parseDate}</p>
						</div>
						<div>
							<Button
								dark
								to='/gaialivsstil-reactApp/user/account/editProfile'
							>
								Rediger profil <IconPencil />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default UserProfile;
