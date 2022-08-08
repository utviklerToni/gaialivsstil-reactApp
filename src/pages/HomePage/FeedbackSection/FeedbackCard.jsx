import React, { Fragment, useState } from 'react';

import IconUserBig from '../../../assets/svgs/IconUserBig';

const FeedbackCard = ({ slides }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

      setCurrentIndex(newIndex);
   };

   const nextlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;

      setCurrentIndex(newIndex);
   };

   const gotoSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
   };

   return (
      <Fragment>
         <section className='feedback-sec card-shadow down-shadow'>
            <div className='feedback'>
               <div className='sm-space-btm'>
                  <IconUserBig />
               </div>
               <div className='el-txt arrow l-arrow' onClick={prevSlide}>
                  &larr;
               </div>
               <div className='d-flex'>
                  <p className='m-txt line-h'>{slides[currentIndex].text}</p>
               </div>
               <div className='d-flex jc-end'>
                  <h4 className='m-txt'>
                     - {slides[currentIndex].name},
                     <span className='city-name'>
                        {' '}
                        {slides[currentIndex].city}
                     </span>
                  </h4>
               </div>
               <div className='el-txt arrow r-arrow' onClick={nextlide}>
                  &rarr;
               </div>
            </div>
         </section>
         <div className='xxl-txt flex-box'>
            {slides.map((slide, slideIndex) => (
               <li
                  key={slideIndex}
                  onClick={() => gotoSlide(slideIndex)}
                  // className={`active-${slideIndex}`}
               >
                  .
               </li>
            ))}
         </div>
      </Fragment>
   );
};

export default FeedbackCard;
