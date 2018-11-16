import React from 'react';

function AddKegComponent(){
  return (
    <div>
      <h3>Add Keg to Inventory</h3>
      <form>
        <input
          type='text'
          id='kegName'
          placeholder='Name of Beer' />
        <input
          type='text'
          id='brand'
          placeholder='brand' />
        <input
          type='text'
          id='price'
          placeholder='price' />
        <input
          type='text'
          id='abv'
          placeholder='ABV' />
        <label id='color-select'>Beer Color:</label>
          <select value='beerColor'>
            <option value="A">Light</option>
            <option value="B">Golden</option>
            <option value="C">Amber</option>
            <option value="D">Dark</option>
          </select>
      </form>

    </div>
  );
}

export default AddKegComponent;
