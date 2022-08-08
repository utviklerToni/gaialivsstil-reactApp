import React, { Fragment } from 'react';
import AuthorItem from './AuthorItem';

import './AuthorsList.css';

const AuthorsList = (props) => {
   if (props.items.length === 0) {
      return (
         <div className='center'>
            <h3>
               Author has not created his/her profile yet. Please check back
               later.
            </h3>
         </div>
      );
   }

   return (
      <Fragment>
         <div className='section-feedback-bg gaialivsstil-bg'>
            <div className='forum-heading m-top forum-heading-p'>
               <p className='m-top l-txt'>
                  Velg hvilken som helst for å fortsette.
               </p>
            </div>
            <ul className='userItems authors-d-flex'>
               {props.items.map((user) => (
                  <AuthorItem
                     key={user._id}
                     id={user._id}
                     name={user.name}
                     role={user.role}
                     email={user.email}
                     image={user.image}
                     // description={user.description}
                     // quoteCount={user.length}
                  />
               ))}
            </ul>
         </div>
      </Fragment>
   );
};

export default AuthorsList;
