import React from "react";
import KegDetails from './KegDetails';

function Keg(props){
  return (
    <div>

      {masterKegList.map((keg, index) =>
        <KegDetails kegName={keg.kegName}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={keg.kegName} />

      )}
    </div>
  );
}

export default Keg;
