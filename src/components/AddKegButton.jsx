import React from "react";
import { Link } from 'react-router-dom';

function AddKegButton(){
  return (
    <button><Link to="/addkeg">Add Keg</Link></button>
  );
}

export default AddKegButton;
