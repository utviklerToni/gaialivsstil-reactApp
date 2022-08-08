import React, { Fragment } from 'react';

import Button from '../../shared/components/FormElements/Button';

const center = {
   textAlign: 'center',
};

const Admin = () => {
   return (
      <Fragment>
         <div className='gaialivsstil-bg section-feedback-bg m2-txt  l-space-top'>
            <div className='abt-width m-top' style={center}>
               <h3 className='dark-header el-txt'>Legge til nye sitater</h3>

               <Button dark to='/admin/addquote'>
                  + Ny sitater
               </Button>

               <Button dark to='/forum/quotes'>
                  Redigre sitater
               </Button>
            </div>
         </div>
      </Fragment>
   );
};

export default Admin;
