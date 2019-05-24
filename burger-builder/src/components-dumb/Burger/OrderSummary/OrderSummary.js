import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your burger includes:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <Button clicked={props.purchaseCancel} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinue} btnType="Success">
        Continue
      </Button>
    </Aux>
  );
}

export default orderSummary;