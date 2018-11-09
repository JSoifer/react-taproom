import React from "react";
import KegDetails from './KegDetails';

function Keg(props){
  return (
    <div>
      <KegDetails kegName={this.props.kegName}
        brand={this.props.brand}
        price={this.props.price}
        abv={this.props.abv}
        key={index} />

    </div>
  );
}

export default Keg;
