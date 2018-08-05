import React from 'react'
import Auxc from '../../../hoc/Auxc';

const OrderSummery = (props) => {
  const ingredientSummery = Object.keys(props.ingredients)
    .map((igKey) =>
    <li key={igKey}>
      <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
    </li>
  )
  return (
    <Auxc>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummery}
      </ul>
      <p>Continue to Checkout</p>
    </Auxc>
  )
}

export default OrderSummery