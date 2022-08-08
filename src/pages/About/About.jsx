import React, { Fragment } from 'react';

import './About.css';

import omOss from '../../assets/webp/om-oss.webp';
import stein from '../../assets/webp/stein.webp';

const About = () => {
   return (
      <Fragment>
         <section className='gaialivsstil-bg m-btm m-top'>
            <div className='abt-width abt-main-header cap-txt '>
               <div className='line-1 d-flex jc-r'>
                  <span></span>

                  <span>
                     <h1 className='welcome-forum-text'>Et par med</h1>
                  </span>
               </div>
               <div className='d-flex d-none jc-l'>
                  <p className='om-oss dark-header'>Om Oss</p>
                  <span></span>
               </div>
               <div className='line-3 d-flex jc-l'>
                  <h1 className='welcome-forum-text'>
                     tiår med <span className='g-blue'> helbredende</span>
                  </h1>
                  <span></span>
               </div>

               <div className='line-4 d-flex jc-l'>
                  <h1 className='welcome-forum-text'>erfaring.</h1>
                  <span></span>
               </div>
            </div>

            <div className='abt-width p-top-9'>
               <div className='d-flex abt-txt'>
                  <span className='authors cap-txt o-team'>Vårt team</span>
                  <span className='cap-txt m-txt'>
                     VI ER ET TEAM SAMSET AV EN HEALER OG EN LIVTRÆNER.
                  </span>
               </div>

               <div className='d-flex jc-l fd-row f-gap'>
                  <div className='author-img'>
                     <img src={omOss} alt='file-name' />
                     <div className='m2-txt m-lineH'>
                        <h3>Hilde Lunde</h3>
                        <p>Grunnlegger, Forfatter og Livscoach</p>
                     </div>
                  </div>

                  <div className='author-img'>
                     <img src={stein} alt='file-name' />
                     <div className='m2-txt m-lineH'>
                        <h3>Stein Lundberg</h3>
                        <p>Med-grunnlegger, Helbreder</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className='contact abt-width m-top l-lineH'>
               <div className='sm-space-btm'>
                  <p className='om-oss'>Kontakt Oss</p>
                  <p className='l-txt'>Vi vil gjerne høre fra deg.</p>
                  <p className='m-txt'>
                     Har dere noen spørsmål, er dere hjertelig velkommen til
                     kontakte oss for en uforpliktende prat.
                  </p>
               </div>

               <div className='sm-space'>
                  <p className='m2-txt'>Telefon: +47-41185016</p>
                  <p className='m2-txt'>E-post: hildelunde@gaialivsstil.no</p>
               </div>
            </div>
         </section>
      </Fragment>
   );
};

export default About;
