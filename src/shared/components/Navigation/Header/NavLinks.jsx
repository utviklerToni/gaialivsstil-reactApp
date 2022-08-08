import React, { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconLock from '../../../../assets/svgs/IconLock';
import IconPencil from '../../../../assets/svgs/IconPencil';
import IconUnLock from '../../../../assets/svgs/IconUnLock';
import IconUser from '../../../../assets/svgs/IconUser';

import { AuthContext } from '../../../context/auth-context';
import './MainNavigation.css';

const NavLinks = (props) => {
	const auth = useContext(AuthContext);
	return (
		<Fragment>
			<div className='nav-items nav-box'>
				<div className='nav-left'>
					<NavLink
						to='/gaialivsstil-reactApp'
						className={({ isActive }) =>
							isActive
								? 'nav-links footer-link active_link'
								: 'nav-links footer-link'
						}
					>
						Hjem
					</NavLink>
					<NavLink
						to='/gaialivsstil-reactApp/services'
						className={({ isActive }) =>
							isActive
								? 'nav-links footer-link active_link'
								: 'nav-links footer-link'
						}
					>
						Tjenester
					</NavLink>
					<NavLink
						to='/gaialivsstil-reactApp/about'
						className={({ isActive }) =>
							isActive
								? 'nav-links footer-link active_link'
								: 'nav-links footer-link'
						}
					>
						Om Oss
					</NavLink>

					{auth.isLoggedIn && (
						<Fragment>
							<NavLink
								to='/gaialivsstil-reactApp/forum/quotes'
								className={({ isActive }) =>
									isActive
										? 'nav-links footer-link active_link'
										: 'nav-links footer-link'
								}
							>
								Forum
							</NavLink>
						</Fragment>
					)}
				</div>
				<div className='nav-right'>
					{auth.role === 'author' && (
						<NavLink
							to='/gaialivsstil-reactApp/admin'
							className={({ isActive }) =>
								isActive
									? 'nav-links footer-link active_link'
									: 'nav-links footer-link'
							}
						>
							<IconPencil />
						</NavLink>
					)}
					{auth.isLoggedIn && (
						<NavLink
							to='/gaialivsstil-reactApp/user/account/myProfile'
							className={({ isActive }) =>
								isActive
									? 'nav-links footer-link active_link'
									: 'nav-links footer-link'
							}
						>
							<IconUser />
						</NavLink>
					)}

					{!auth.isLoggedIn && (
						<NavLink
							to='/gaialivsstil-reactApp/isLoggingIn'
							className={({ isActive }) =>
								isActive
									? 'nav-links footer-link active_link'
									: 'nav-links footer-link'
							}
						>
							<IconLock />
						</NavLink>
					)}

					{auth.isLoggedIn && (
						<NavLink
							to='/gaialivsstil-reactApp/isLoggingIn'
							onClick={auth.logout}
							className={({ isActive }) =>
								isActive
									? 'nav-links footer-link active_link'
									: 'nav-links footer-link'
							}
						>
							<IconUnLock />
						</NavLink>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default NavLinks;
