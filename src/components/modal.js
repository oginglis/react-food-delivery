import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = (props) => {
  return(
    <div className={ props.modalActive ? 'modal-wrapper-black active' : 'modal-wrapper-black'} onClick={props.toggleModalActive}>
      <div className="modal-wrapper">
        <FontAwesomeIcon className="modal-close-icon" icon={faTimes} onClick={ props.toggleModalActive }/>
        <h1 className="modal-title">Sorry - This Feature Has Not Been Implemented Yet</h1>
      </div>
    </div>
  )
}

export default Modal;
