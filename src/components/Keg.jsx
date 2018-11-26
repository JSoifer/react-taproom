import React from 'react';
import PropTypes from 'prop-types';
import EditKegButton from './EditKegButton';
import SellButton from './SellButton';
import KegGraphic from './KegGraphic';

function Keg(props){

  return (
    <div className='kegDetailsContainer'>
      <style jsx>{`
          .kegDetailsContainer {
            position: relative;
            display: flex;
            width: 90vw;
            justify-content: space-between;
            border: 2px solid darkgrey;
            padding-left: 20px;
            margin-top: 2vh;
            background-color: #B4C297;
            z-index: -1;
          }
          .buttons {
            display: flex;
            margin: 1vw;
            justify-content: space-around;
          }
          .kegGraphicDiv {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .kegGraphic {
            height: 200px;
            width: 165px;
            overflow: hidden;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
          .kegGraphic svg {
            position: absolute;
            z-index: 5;
          }
          .liquid {
            height: 200px;
            width: 175px;
            background-color: gold;
            position: absolute;
            transform: translateY(-10px);
            z-index: -1;
          }
          `}</style>
      <div>
        <h1>{props.kegName}</h1>
        <h2>Brand: {props.brand}</h2>
        <h3>Price: ${props.price}</h3>
        <h4>ABV:{props.abv}</h4>
        <h4>Pints Remaining:{props.pintsRemaining}</h4>
      </div>
      <div>
        <div className='kegGraphicDiv'>
          <div className='kegGraphic'>
            <div className='liquid'>
            </div>
            <KegGraphic/>
          </div>
        </div>
        <div className='buttons'>
          <EditKegButton/>
          <SellButton/>
        </div>
      </div>
    </div>
  );
}
Keg.propTypes = {
  kegName: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  color: PropTypes.string,
  onSale: PropTypes.func
};
export default Keg;
