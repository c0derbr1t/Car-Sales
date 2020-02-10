import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/removeFeature';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const removeFeature = item => {
    props.removeFeature(item);
  };

  // console.log("features inside AddedFeatures: ", props.features);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.featureReducer.car.features
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);


