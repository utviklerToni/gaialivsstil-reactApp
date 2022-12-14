import React, { Fragment, useState } from 'react';

const IconHeart = (props) => {
   const [isActiveColor, setIsActiveColor] = useState(false);

   const heartColorHandler = () => {
      setIsActiveColor(!isActiveColor);
   };

   return (
      <Fragment>
         <div
            style={{ display: 'inline-block', cursor: 'pointer' }}
            onClick={props.onClick}
         >
            <div>
               <svg
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  height='48px'
                  width='48px'
                  className={setIsActiveColor ? 'blue-heart' : null}
                  onClick={heartColorHandler}
               >
                  <title>Heart</title>
                  <path d='M4 2C1.75 2 .033 3.75 0 5.992V6c0 2.063.43 3.499 1.621 4.889 1.191 1.39 3.08 2.763 6.078 5.011l.133.1h.336l.133-.1c2.998-2.248 4.887-3.621 6.078-5.011C15.57 9.499 16 8.063 16 6c0-2.25-1.75-3.977-3.994-4H12c-1.078 0-1.95.265-2.658.752-.54.371-.937.94-1.344 1.506-.407-.564-.803-1.13-1.342-1.496-.708-.483-1.574-.746-2.648-.762H4zm7.996 1C13.751 3.019 15 4.25 15 6c0 1.938-.32 3.001-1.379 4.236C12.616 11.41 10.741 12.8 8 14.854c-2.74-2.055-4.616-3.445-5.621-4.618C1.322 9.003 1 7.94 1 6.008v-.002c.027-1.756 1.25-3.002 2.996-3.004.923.014 1.557.217 2.098.586.541.37 1.001.927 1.484 1.682L8 5.928l.422-.658c.484-.756.945-1.322 1.486-1.694.54-.371 1.169-.575 2.088-.576z'></path>
                  <path
                     d='M4 2.5C2 2.5.53 4 .5 6c0 4 1.5 5 7.5 9.5C14 11 15.5 10 15.5 6c0-2-1.5-3.48-3.5-3.5-2 0-3 .938-4 2.5-1-1.563-2-2.47-4-2.5z'
                     opacity='.2'
                  ></path>
               </svg>
            </div>
         </div>
      </Fragment>
   );
};

export default IconHeart;
