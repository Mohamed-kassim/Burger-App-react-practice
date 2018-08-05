import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';
import PropTypes from 'prop-types';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>{
      return [...Array(props.ingredients[igKey])].map((_, i) =>
        <BurgerIngredient key= {igKey + i} type= {igKey} />
      )}
    )
    .reduce(((arr, el) => arr.concat(el)),[]);
    transformedIngredients = (transformedIngredients.length === 0) ? <p> please start adding ingredients</p> : transformedIngredients
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

Burger.propTypes = {
  ingredients : PropTypes.object
}

export default Burger
