import React, { useEffect, useState } from "react";
// import Markers from "./MarcarMapa";
// import { useLocation, useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "../../style/mapa.css";
import MarkerPopup from "./MarkerPopup";
import pintarIcon from "./LocalizacionIcon";



const CapLocalizacion = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div style={{justifyContent: "center"}}>
      <h1>Ubicación Actual</h1>
      <p>Latitude: {state.latitude} | Longitude: {state.longitude}</p>
         <MapContainer center={{lat: state.latitude, lng: state.longitude}} zoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={{lat: state.latitude, lng: state.longitude}} icon={pintarIcon}>  
          <MarkerPopup name={"Cliente"} /> 
          </Marker>
      </MapContainer>
     
    </div>
  );
};

export default CapLocalizacion;
