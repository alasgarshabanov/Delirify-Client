import React from "react";
import Autocomplete from 'react-google-autocomplete';

const PlaceAutocompleteComponent = ({ onSelected, types }) => {
  return (
    <Autocomplete
      style={{
        width: '100%',
        height: '40px',
        paddingLeft: '16px',
        marginTop: '2px',
        marginBottom: '100px'
      }}
      onSelected={ onSelected }
      types={ types }
    />
  )
}

export default PlaceAutocompleteComponent;
