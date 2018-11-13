import React from "react";
import PropTypes from 'prop-types';
import AddKegButton from './AddKegButton';

function Header(props){
  function currentDate(){
    let today = new Date();
    return today
  };
  let date = currentDate(); 

  const headerTextStyle = {
    textAlign: 'center',
    fontSize: '3em',
    paddingTop: '5vh',
    color: 'white',
    textShadow: "2px 2px black"
  }
  const headerStyle = {
    width: '100%',
    height: '20vh',
    backgroundImage: 'url("https://images.pexels.com/photos/1267682/pexels-photo-1267682.jpeg?auto=compress&cs=tinysrgb&h=350")',
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  return (
    <div style={headerStyle}>
      <h1 style={headerTextStyle}>Horace's Tap Room</h1>
      <h2></h2>
      <AddKegButton/>
    </div>
  );
}

export default Header;
