import React from 'react'
import classes from './BuildControl.css'
import { PropTypes } from 'prop-types';

 const BuildControl = (props) => {
   console.log(props.disabled)
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label} >{props.label}</div>
      <button
        onClick= {props.added}
        className={classes.More}
      >
        More
      </button>
      <button 
        onClick= {props.removed}
        className={classes.Less}
        disabled ={props.disabled}
      >
        Less
      </button>
    </div>
  )
}

BuildControl.propTypes = {
    label : PropTypes.string,
}
export default BuildControl


