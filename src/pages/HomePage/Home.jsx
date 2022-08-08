import React, { Fragment } from 'react';

import './Home.css';
import GridSection from './GridSection/GridSection';

import FeedbackSection from './FeedbackSection/FeedbackSection';
import EmailForm from './EmailUs/EmailForm';

const Home = () => {
   return (
      <Fragment>
         <div className='home-bg m-top'>
            <div className='centered flex-dir-col home-bg-overlay color-header-txt'>
               <h1 className='welcome-txt'>Velkommen til Gaialivsstil</h1>
               <p className='m-lineH welcome-para cap-txt'>
                  ta vare på deg selv, fysisk og psykisk gaialivsstil handler om
                  healing, råd og livsveiledning for å få et godt og fredfullt
                  liv
               </p>
            </div>
         </div>

         {/* card grid section */}
         <section className='section-grid-bg'>
            <div className='section-width'>
               <GridSection />
            </div>
         </section>

         <section className='gaialivsstil-bg  section-feedback-bg'>
            <FeedbackSection />

            <div className='email-us section-width'>
               <EmailForm />
            </div>
         </section>
      </Fragment>
   );
};

export default Home;
