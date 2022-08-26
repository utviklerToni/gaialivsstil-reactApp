import React, { Fragment, useContext, useEffect, useState } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';
import UserProfile from '../components/UserProfile';
// import LoadingIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingIndicator';
import ErrorModal from '../../shared/components/UIElements/Modal/ErrorModal';
import { AuthContext } from '../../shared/context/auth-context';
import LoadingDotIndicator from '../../shared/components/UIElements/LoadingIndicator/LoadingDotIndicator';

const User = () => {
   const auth = useContext(AuthContext);

   const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
   const [loadedUser, setLoadedUser] = useState();

   useEffect(() => {
      const fetchUser = async () => {
         try {
            const responseData = await sendRequest(
               `${process.env.REACT_APP_BACKEND_URL}/v1/users/me`,
               'GET',
               null,
               { Authorization: 'Bearer ' + auth.token }
            );

            setLoadedUser(responseData.doc, responseData.token);
         } catch (err) {}
      };

      fetchUser();
   }, [sendRequest, auth.token, auth.userId]);

   return (
      <Fragment>
         <ErrorModal error={errorState} onClear={clearError} />
         {isLoading && (
            <div className='center'>
               {/* <LoadingIndicator asOverlay /> */}
               <LoadingDotIndicator />
            </div>
         )}
         <div className='gaialivsstil-bg min-h l-space-top m-top m-btm'>
            {!isLoading && loadedUser && <UserProfile item={loadedUser} />}
         </div>
      </Fragment>
   );
};

export default User;
