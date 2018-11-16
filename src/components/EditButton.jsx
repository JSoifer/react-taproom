import React from 'react';
import { Link } from 'react-router-dom';

function EditButton(){
  return (
    <div>
      <button><Link to="/editkeg">Edit Keg</Link></button>

    </div>
  );
}

export default EditButton;
