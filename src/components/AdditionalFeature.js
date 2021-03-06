import React from 'react';

const AdditionalFeature = props => {
  console.log("feature inside AdditionalFeature:", props.feature)
  const feature = props.feature;
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props.feature)}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
