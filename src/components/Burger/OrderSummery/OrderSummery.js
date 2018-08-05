import React from 'react'
import Auxc from '../../../hoc/Auxc';
import Button from '../../UI/Button/Button';

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
      <p><strong>Total price: </strong>{props.totalPrice.toFixed(2)}</p>
      <p>Continue to Checkout</p>
      <Button
        btnType="Danger"
        clicked={props.canceled}
      >
        CANCEl
      </Button>
      <Button
        btnType="Success"
        clicked={props.continued}
      >
        Continue
      </Button>
    </Auxc>
  )
}

export default OrderSummery
