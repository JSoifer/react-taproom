import React from "react";
import PropTypes from 'prop-types';

function KegDetails(props){
  return (
    <div>
      <hr/>
      <h3>{props.kegName}</h3>
      <h4>{props.brand}</h4>
      <h4>${props.price}</h4>
      <h4>{props.abv}</h4>
    </div>
  );
}
KegDetails.propTypes = {
  kegName: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  color: PropTypes.string
};
export default KegDetails;
