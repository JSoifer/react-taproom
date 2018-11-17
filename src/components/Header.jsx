import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddKegButton from './AddKegButton';
import EditKegButton from './EditKegButton';

function Header(props){
  function currentDate(){
    let today = new Date();
    return today;
  }
  let date = currentDate();

  const headerTextStyle = {
    textAlign: 'center',
    fontSize: '3em',
    paddingTop: '5vh',
    color: 'white',
    textShadow: '2px 2px black'
  };
  const headerStyle = {
    width: '100%',
    height: '20vh',
    backgroundImage: 'url("https://images.pexels.com/photos/1267682/pexels-photo-1267682.jpeg?auto=compress&cs=tinysrgb&h=350")',
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  const linkStyle = {
    textDecoration: 'none'
  };
  return (
    <div style={headerStyle}>
      <Link style={linkStyle} to='/'>
        <h1 style={headerTextStyle}>Horace's Tap Room</h1>
      </Link>
      <h2></h2>
      <AddKegButton/>
    </div>
  );
}

export default Header;
