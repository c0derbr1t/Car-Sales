import React from 'react';
import { connect } from 'react-redux';

// import { updatePrice } from '../actions/updatePrice';

const Total = props => {
// console.log("additionalPrice in Total: ", props.additionalPrice);
// console.log("price in Total: ", props.price);
// console.log("state in Total: ", props);

  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state,
    additionalPrice: state.featureReducer.additionalPrice,
    price: state.featureReducer.car.price
  }
}

export default connect(mapStateToProps, {})(Total);
