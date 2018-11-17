import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

const dummyMasterKegList = [
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
];
function KegList(props){
  return (
    <div>
      <div>
        {dummyMasterKegList.map((keg) =>
          <Keg kegName={keg.kegName}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            key={keg.kegName} />
        )}
      </div>
   <div>
        {props.kegList.map((newKeg) =>
          <Keg kegName={newKeg.kegName}
            brand={newKeg.brand}
            price={newKeg.price}
            abv={newKeg.abv}
            key={newKeg.kegName} />
        )}
      </div>
    </div>
  );
}
KegList.propTypes = {
  kegList: PropTypes.array
};
export default KegList;
