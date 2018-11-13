import React from "react";
import PropTypes from 'prop-types';
import KegDetails from './KegDetails';
import EditButton from './EditButton';

function Keg(props){
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

export default Keg;
