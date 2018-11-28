import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AddKegComponent(props){
  let _kegName = null;
  let _brand = null;
  let _price = null;
  let _abv = null;


  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({kegName: _kegName.value, brand: _brand.value, price: _price.value, abv: _abv.value, pintsRemaining: 124});
    _kegName.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
  }

  return (
    <div>
      <style jsx>{`

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          input {
            margin-bottom: 20px;
            height: 5vh;
          }
          #addForm {
            width: 75%;
            height: 50vh;
            display: flex;
            flex-direction: column;
          }
          button {
            width: 50px;
            height: 25px;
          }

          `}</style>
      <div className='container'>
        <h3>Add Keg to Inventory</h3>
        <form id='addForm' onSubmit={handleNewKegFormSubmission}>
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
    </div>
  );
}
AddKegComponent.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default AddKegComponent;
