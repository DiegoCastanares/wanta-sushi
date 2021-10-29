import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -34.58175029942712, lng: -58.475186753236365 }}
    >
      <Marker
        position={{ lat: -34.58175029942712, lng: -58.475186753236365 }}
      />
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
