import React, { Component } from 'react'
import Auxc from '../hoc/Auxc';
import Burger from './../components/Burger/Burger';
import BuildControls from './../components/Burger/BuildControls/BuildControls';
import Modal from './../components/UI/Modal/Modal';
import OrderSummery from './../components/Burger/OrderSummery/OrderSummery';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
export default class BurgerBuilder extends Component {
  state = {
    ingredients : {
      salad: 0,
      cheese: 0,
      bacon:0,
      meat: 0, 
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  }

  updatePurchaseState (ingredients){
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
        .reduce((sum, el) => sum + el ,0);
    this.setState({purchasable : sum > 0});
  }
  addIngredientHandler = (type) =>{
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = this.state.ingredients[type] + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    })
    this.updatePurchaseState(updatedIngredients)
  }
  removeIngredientHandler = (type) =>{
    const updatedIngredients = {
      ...this.state.ingredients
    };
    const oldCount = this.state.ingredients[type];
    if (oldCount <=0){
      return;
    }
    updatedIngredients[type] = oldCount - 1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    })
    this.updatePurchaseState(updatedIngredients)
  }
  purchaseHandler = (prevState) => this.setState({ purchasing: true })
  purchaseCancelHandler = () => this.setState({ purchasing: false })
  purchaseContinueHandler = () => alert('You Continued')
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    Object.keys(disabledInfo).forEach(key => {
      disabledInfo[key] = disabledInfo[key] <= 0
    });
    return (
      <Auxc>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummery
            ingredients={this.state.ingredients}
            continued={this.purchaseContinueHandler}
            canceled={this.purchaseCancelHandler}
            totalPrice={this.state.totalPrice}
            />
        </Modal>
        <Burger
          ingredients = {this.state.ingredients}
        />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.purchaseHandler}
        />
      </Auxc>
    )
  }
}
