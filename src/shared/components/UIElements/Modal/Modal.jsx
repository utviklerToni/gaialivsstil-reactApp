import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';
import Backdrop from '../../UIElements/Backdrop';

const ModalOverlay = (props) => {
   const nodeRef = useRef(null);
   // prevent refresh on submitting the form
   const preRef = props.onSubmit
      ? props.onSubmit
      : (event) => event.preventDefault();

   const content = (
      <div className={`modal ${props.className}`} style={props} ref={nodeRef}>
         <header className={`modal__header ${props.headerClass}`}>
            <h2>{props.header}</h2>
         </header>
         <form onSubmit={preRef}>
            <div className={`modal__content ${props.contentClass}`}>
               {props.children}
            </div>
            <br />
            <footer className={`modal__footer ${props.footerClass}`}>
               {props.footer}
            </footer>
         </form>
      </div>
   );

   return ReactDOM.createPortal(content, document.getElementById('modal'));
};

const Modal = (props) => {
   const nodeRef = useRef(null);
   return (
      <Fragment>
         {props.show && <Backdrop onClick={props.onCancel} />}
         <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={300}
            classNames='modal'
            nodeRef={nodeRef}
         >
            <ModalOverlay {...props} />
         </CSSTransition>
      </Fragment>
   );
};

export default Modal;
