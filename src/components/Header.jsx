import React from "react";
import PropTypes from 'prop-types';

function Header(props){
  function currentDate(){
    let today = new Date();
    return today
  };
  const date = currentDate();

  const headerTextStyle = {
    textAlign: 'center',
    fontSize: '3em',
    paddingTop: '5vh'
  }
  const headerStyle = {
    width: '100%',
    height: '20vh',
    backgroundImage: 'url("https://images.pexels.com/photos/1267682/pexels-photo-1267682.jpeg?auto=compress&cs=tinysrgb&h=350")'
  }
  return (
    <div style={headerStyle}>
      <h1 style={headerTextStyle}>Horace's Tap Room</h1>
      <h2></h2>
    </div>
  );
}

export default Header;
