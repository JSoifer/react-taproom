import React from "react";
import PropTypes from 'prop-types';

function KegDetails(props){
  return (
    <div>
      <h1>KegDetails</h1>
      <h3>{props.kegName}</h3>
      <h4>{props.brand}</h4>
      <h4>${props.price}</h4>
      <h4>{props.abv}</h4>

    </div>
  );
}
KegDetails.propTypes = {
  kegName: string,
  brand: string,
  price: number,
  abv: number,
  color: string
};
export default KegDetails;
