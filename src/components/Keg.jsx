import React from "react";
import KegDetails from './KegDetails';

function Keg(props){
  return (
    <div>
      <h1>Keg</h1>
      <KegDetails kegName={keg.kegName}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        key={index} />

    </div>
  );
}

export default Keg;
