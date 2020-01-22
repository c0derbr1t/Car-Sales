import React from 'react';
import { connect } from 'react-redux';

import { buyItem } from '../actions/buyItem';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  const buyItem = item => {
    props.buyItem();
  };
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.featureReducer.additionalFeatures
  }
}

export default connect(mapStateToProps, { buyItem })(AdditionalFeatures);
