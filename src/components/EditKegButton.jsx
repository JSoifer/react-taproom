import React from 'react';
import { Link } from 'react-router-dom';

function EditKegButton(){
  return (
    <button><Link to='/editkeg'>Edit Keg</Link></button>
  );
}

export default EditKegButton;
