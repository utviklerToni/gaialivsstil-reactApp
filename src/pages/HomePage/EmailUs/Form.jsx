import React, { Fragment } from 'react';

import './EmailUsQueries.css';
import './Form.css';

const Form = () => {
   return (
      <Fragment>
         <form className='cta-form' action='#'>
            <div className=''>
               <label htmlFor='full-name'>Ditt Navn</label>
               <input
                  type='text'
                  id='full-name'
                  placeholder='John Doe'
                  required
               />
            </div>

            <div>
               <label htmlFor='email'>E-Post</label>
               <input
                  type='email'
                  id='email'
                  placeholder='me@example.com'
                  required
               />
            </div>

            <button className='btn btn--form'>SEND E-POST</button>
         </form>
      </Fragment>
   );
};

export default Form;
