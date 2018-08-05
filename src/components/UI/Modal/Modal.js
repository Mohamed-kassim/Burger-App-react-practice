import React from 'react';
import classes from './Modal.css'
import Auxc from '../../../hoc/Auxc';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <Auxc>
      <Backdrop 
        show={props.show}
        clicked={props.modalClosed}
      >
        <div 
          className={classes.Modal}
          style = {{
            transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1': '0',
          }} 
        >
          {props.children}
        </div>
      </Backdrop>
    </Auxc>
    
  )
}

export default Modal;
