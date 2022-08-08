import { useCallback, useEffect, useRef, useState } from 'react';

export const useHttpClient = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [errorState, setErrorState] = useState();

   const activeHttpReq = useRef([]);

   const sendRequest = useCallback(
      async (url, method = 'GET', body = null, headers = {}) => {
         setIsLoading(true);

         const httpAbortCtrl = new AbortController();
         activeHttpReq.current.push(httpAbortCtrl);

         try {
            const response = await fetch(url, {
               method,
               body,
               headers,
               signal: httpAbortCtrl.signal,
            });

            const responseData = await response.json();

            activeHttpReq.current = activeHttpReq.current.filter(
               (reqCtrl) => reqCtrl !== httpAbortCtrl
            );

            if (!response.ok) {
               throw new Error(responseData.message);
            }
            setIsLoading(false);
            return responseData;
         } catch (err) {
            if (!httpAbortCtrl.signal.aborted) {
               setErrorState(err.message);
               setIsLoading(false);
               throw err;
            }
         }
      },
      []
   );

   const clearError = () => {
      setErrorState(null);
   };

   useEffect(() => {
      return () => {
         activeHttpReq.current.forEach((abortCtrl) => abortCtrl.abort());
      };
   }, []);

   return { isLoading, errorState, sendRequest, clearError };
};
