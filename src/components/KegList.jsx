import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';


function KegList(props){
  return (
    <div>
      {props.kegList.map((newKeg) =>
        <Keg kegName={newKeg.kegName}
          brand={newKeg.brand}
          price={newKeg.price}
          abv={newKeg.abv}
          pintsRemaining={newKeg.pintsRemaining}
          key={newKeg.kegName} />
      )}
    </div>
  );
}
KegList.propTypes = {
  kegList: PropTypes.array
};
export default KegList;
