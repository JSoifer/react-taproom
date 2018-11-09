import React from "react";
import AddKegButton from './AddKegButton';
import Keg from './Keg';

const masterKegList = [
  {
    kegName: 'Oktoberfest Marzen',
    brand: 'Hacker-Pschorr',
    price: 5.25,
    abv: 5.5,
    color: '#ff8C15'
  },
  {
    kegName: 'Dunkel',
    brand: 'Hofbrau',
    price: 5.25,
    abv: 5.5,
    color: '#44110E'
  },
  {
    kegName: 'Weissbier',
    brand: 'Paulaner',
    price: 5.25,
    abv: 5.5,
    color: '#F2B749'
  }
]
function KegList(){
  return (
    <div>
      <h1>KegList component</h1>
      {masterKegList.map((kegDetails, index) =>
        <KegDetails kegName={keg.kegName}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={index} />
      )}
      <AddKegButton/>
    </div>
  );
}

export default KegList;
