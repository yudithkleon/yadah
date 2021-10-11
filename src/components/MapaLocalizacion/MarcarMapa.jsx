import React from 'react'
import { Marker } from "react-leaflet";
import MarkerPopup from "./MarkerPopup"
import { LocalizacionIcon } from './LocalizacionIcon';


const MarcarMapa = (props) => {
   const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={LocalizacionIcon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
}

export default MarcarMapa
