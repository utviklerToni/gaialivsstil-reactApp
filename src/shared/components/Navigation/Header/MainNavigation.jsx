import React, { Fragment, useState } from 'react';

import './MainNavigation.css';
import navLogo from '../../../../assets/png/navLogoMedium.png';
import NavLinks from './NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../UIElements/Backdrop';

const MainNavigation = () => {
	const [openSideDrawer, setOpenSideDrawer] = useState(false);

	const openDrawer = () => {
		setOpenSideDrawer(true);
	};

	const closeDrawer = () => {
		setOpenSideDrawer(false);
	};

	return (
		<Fragment>
			{openSideDrawer && <Backdrop onClick={closeDrawer} />}

			<SideDrawer show={openSideDrawer} onClick={closeDrawer}>
				<nav className='side-drawer-nav'>
					<NavLinks />
				</nav>
			</SideDrawer>

			<header className='header-fixed'>
				<div className='header-width header-width-sm'>
					<button className='hamburger-menu-btn' onClick={openDrawer}>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<div className='logo-links'>
						<div className='flex-left-links'>
							<div className='logo-title-box'>
								<img
									src={navLogo}
									alt=''
									style={{ maxWidth: '120px' }}
								/>
								<h3 className='logo-text'>Gaialivsstil</h3>
							</div>
							<nav className='main-nav-links' style={{ flexGrow: '1' }}>
								<NavLinks />
							</nav>
						</div>
					</div>
				</div>
			</header>
		</Fragment>
	);
};

export default MainNavigation;
