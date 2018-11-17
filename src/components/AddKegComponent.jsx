import React from 'react';
import PropTypes from 'prop-types';

function AddKegComponent(props){
  let _kegName = null;
  let _brand = null;
  let _price = null;
  let _abv = null;


  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: _kegName.value, brand: _brand.value, price: _price.value, abv: _abv.value});
    _kegName.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
  }

  return (
    <div>
      <h3>Add Keg to Inventory</h3>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='kegName'
          placeholder='Name of Beer'
          ref={(input) => {_kegName = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}} />
        <input
          type='text'
          id='price'
          placeholder='price'
          ref={(input) => {_price = input;}} />
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}} />
        <button type='submit'>Add</button>
      </form>

    </div>
  );
}
AddKegComponent.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default AddKegComponent;
