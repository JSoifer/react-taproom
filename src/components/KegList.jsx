import React from "react";

import KegDetails from './KegDetails';
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
function KegList(props){
  return (
    <div>
      {masterKegList.map((kegDetails) =>
        <KegDetails kegName={kegDetails.kegName}
          brand={kegDetails.brand}
          price={kegDetails.price}
          abv={kegDetails.abv}
          key={kegDetails.kegName} />
      )}
    </div>
  );
}

export default KegList;
