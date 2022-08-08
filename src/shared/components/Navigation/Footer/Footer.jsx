import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import '../Header/MainNavigation.css';

// import Facebook from '../../../../assets/svgs/Facebook';
import navLogo from '../../../../assets/png/navLogoMedium.png';

const Footer = () => {
   return (
      <Fragment>
         <div className='footer'>
            <div className='section-width grid grid--footer'>
               <div
                  className='logo-col '
                  style={{ textAlign: 'center', alignItems: 'center' }}
               >
                  <Link to='/' className='footer-logo footer-link'>
                     {/* <div className='logo'>BJØRNS BEERS & BARS</div> */}
                     <div className='logo logo-align'>
                        <img
                           src={navLogo}
                           alt=''
                           style={{ maxWidth: '207px' }}
                        />
                        <h3 className='logo-text el-txt'>Gaialivsstil</h3>
                        <span className='quote'>Din Transformasjon</span>
                     </div>
                  </Link>

                  <ul className='social-links'>
                     {/* <li>
                        <a href='/' className='social-link'>
                           <Facebook />
                        </a>
                     </li> */}
                  </ul>

                  <p className='copyright'>
                     Copyright &copy; 2022 GAIALIVSSTIL
                  </p>
               </div>
               <div className='address-col'>
                  <p className='footer-heading'>Contact Us</p>
                  <address className='contacts'>
                     <p className='address'>
                        369 Lorem Ipsum st, 3rd Floor, Lorem Ipsum, Lorem 9369
                     </p>
                     <a href='tel:369-369-6969' className='footer-link'>
                        +47-41185016
                     </a>
                     <br />
                     <a
                        href='mailto:hildelunde@gaialivsstil.no'
                        className='footer-link'
                     >
                        hildelunde@gaialivsstil.no
                     </a>
                  </address>
               </div>
               <div className='nav-col'>
                  <p className='footer-heading'>Account</p>
                  <ul className='footer-nav'>
                     <li>
                        <Link to='/isLoggingIn' className='footer-link'>
                           Create Account
                        </Link>
                     </li>
                     <li>
                        <Link to='/isLoggingIn' className='footer-link'>
                           Sign In
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className='nav-col'>
                  <p className='footer-heading'>Organization</p>
                  <ul className='footer-nav'>
                     <li>
                        <Link to='/about' className='footer-link'>
                           About Gaialivsstil
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Footer;
