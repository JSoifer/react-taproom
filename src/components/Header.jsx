import React from "react";
import PropTypes from 'prop-types';

function Header(props){
  function currentDate(){
    let today = new Date();
    return today
  };
  const date = currentDate();
  return (
    <div>
      <h1>Horace's Tap Room</h1>
      <h2></h2> 
    </div>
  );
}

export default Header;
