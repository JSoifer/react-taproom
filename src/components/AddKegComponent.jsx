import React from 'react';

function AddKegComponent(){
  let _kegName = null;
  let _brand = null;
  let _price = null;
  let _abv = null;


  function handleNewKegFormSubmission(event) {
    event.preventDefault();
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
        <label id='color-select'>Beer Color:</label>
        <select
          ref={select => this.beerColor = select}
          name='beerColor'>
          <option value='light'>Light</option>
          <option value='golden'>Golden</option>
          <option value='amber'>Amber</option>
          <option value='dark'>Dark</option>
        </select>
        <button type='submit'>Add</button>
      </form>

    </div>
  );
}

export default AddKegComponent;
