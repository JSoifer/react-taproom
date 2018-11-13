import React from "react";
import PropTypes from 'prop-types';
import EditButton from './EditButton';
import SellButton from './SellButton';
import KegGraphic from './KegGraphic';

function KegDetails(props){
  return (
    <div>
      <div>
        <h3>Name: {props.kegName}</h3>
        <h4>Brand: {props.brand}</h4>
        <h4>Price: ${props.price}</h4>
        <h4>ABV:{props.abv}</h4>
      </div>
      <div>
        <EditButton/>
      </div>
      <div>
        <SellButton/>
      </div>
      <div>
        <KegGraphic/>
      </div>
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
