import React, { useState, useEffect } from "react";
import data from "../../assets/data.json";
import Markers from "./MarcarMapa";
import { useLocation, useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Container } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import venues from "../../assets/data.json"
import "../../style/mapa.css";
import MarkerPopup from "./MarkerPopup";
import pintarIcon  from "./LocalizacionIcon";

export const Mapa = (props) => {
  // const [state, setState] = useState({
  //   currentLocation: { lat: 4.6391857, lng: -74.1838036 },
  //   zoom: 13,
  //   data,
  // });

  // const location = useLocation();
  // const history = useHistory();

  // useEffect(() => {
  //   if (state.currentLocation.lat && state.currentLocation.lng) {
  //     const currentLocation = {
  //       lat: state.currentLocation.lat,
  //       lng: state.currentLocation.lng,
  //     };
  //     console.log(state);
  //     setState({
  //       ...state,
  //       data: {
  //         venues: state.data.venues.concat({
  //           name: "new",
  //           geometry: [currentLocation.lat, currentLocation.lng],
  //         }),
  //       },
  //       currentLocation,
  //     });
  //     history.replace({
  //       pathname: "/map",
  //       state: {},
  //     });
  //   }
  // }, []);
  console.log(data.venues[0].geometry);
  return (
    <div>
      <Container>
        {/* <MapContainer center={state.currentLocation} zoom={state.zoom}> */}
          <MapContainer center={{lat: 4.6391857, lng:-74.1838036}} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <Markers venues={state.data.venues} /> */}
         
          <Marker position={[data.venues[0].geometry[0], data.venues[0].geometry[1]]} icon={pintarIcon}>  
          <MarkerPopup name={data.venues[0].description}/> 
          </Marker>
          </MapContainer>
      </Container>
    </div>
  );
};
