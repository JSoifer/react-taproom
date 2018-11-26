import React from 'react';
import PropTypes from 'prop-types';

function SellButton({onSale}){

  function sellPint() {
    console.log('Sell Pint');
    onSale();
  }

  return (
    <div>
      <button onClick={sellPint}>SellButton</button>
    </div>
  );
}
SellButton.propTypes = {
  onSale: PropTypes.func
};
export default SellButton;
