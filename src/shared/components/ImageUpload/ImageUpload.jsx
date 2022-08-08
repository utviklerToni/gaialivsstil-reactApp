import React, { Fragment, useRef, useState, useEffect } from 'react';

import Button from '../FormElements/Button';
import './ImageUpload.css';
import '../FormElements/Input.css';

const ImageUpload = (props) => {
   const [file, setFile] = useState();
   const [previewImageUrl, setPreivewImageUrl] = useState();
   const [isValid, setIsValid] = useState(false);

   const imageUploadRef = useRef();

   useEffect(() => {
      if (!file) {
         return;
      }

      // browswer's API FileReader()
      const fileReader = new FileReader();
      fileReader.onload = () => {
         setPreivewImageUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
   }, [file]);

   const afterImagePickHandler = (event) => {
      let pickedFile;
      let fileIsValid = isValid;

      if (event.target.files && event.target.files.length === 1) {
         pickedFile = event.target.files[0];
         setFile(pickedFile);
         setIsValid(true);
         fileIsValid = true;
      } else {
         setIsValid(false);
         fileIsValid = false;
      }
      // the is valid is still the setIsValid's value
      // cuz the above if one's is scheduled to set but not set immediately
      props.onInput(props.id, pickedFile, fileIsValid);
   };

   const uploadImageHandler = () => {
      imageUploadRef.current.click();
   };

   return (
      <Fragment>
         <div className='form-control m2-txt'>
            <input
               id={props.id}
               ref={imageUploadRef}
               type='file'
               accept='.jpg,.png,.jpeg,.webp'
               onChange={afterImagePickHandler}
               style={{ display: 'none' }}
            />

            <div className={`image-upload ${props.center && 'center'}`}>
               <div className='image-upload-preview'>
                  {previewImageUrl && (
                     <img src={previewImageUrl} alt='preview' />
                  )}
                  {!previewImageUrl && <p>Velg et nytt bilde.</p>}
               </div>
               <Button type='button' onClick={uploadImageHandler}>
                  velg bilde
               </Button>
            </div>
            {!isValid && <p>{props.errorText}</p>}
         </div>
      </Fragment>
   );
};

export default ImageUpload;
