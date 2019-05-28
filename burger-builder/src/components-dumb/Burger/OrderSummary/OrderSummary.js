import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
// This could be a functional component. It does not have to be a class. The only reason it is a class is for the lifecycle hook below.
  componentDidUpdate() {
    console.log('[OrderSummary] Did Update');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>);
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Your burger includes:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout</p>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <Button clicked={this.props.purchaseCancel} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">
          Continue
        </Button>
      </Aux>);
  }
}
export default OrderSummary;