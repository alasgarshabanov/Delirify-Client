import React from "react";
import { Marker } from "react-google-maps";

const MarkerComponent = ({ google, onDragEnd, position}) => {

  return (
    <Marker
      google={google}
      name={'Dolores park'}
      draggable={true}
      onDragEnd={ onDragEnd }
      position={ position }
    />
  );
}

export default MarkerComponent;
