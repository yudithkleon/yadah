
import React, { useState, useEffect } from "react";
import data from '../../assets/data.json'
import Markers from './MarcarMapa'
import { useLocation, useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import {  Container } from "react-bootstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import '../../style/mapa.css'


export const Mapa = (props) => {

    // const [state, setState] = useState({ 
    //   currentLocation: {lat: 4.6391857, lng:-74.1838036 },
    //   zoom: 13,
    //   data,
    // });
  
    // const location = useLocation();
    // const history = useHistory();
  
    // useEffect(() => {

    //   if (location.state.latitude && location.state.longitude) {
    //     const currentLocation = {
    //       lat: location.state.latitude,
    //       lng: location.state.longitude,
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
    //     // history.replace({
    //     //   pathname: "/map",
    //     //   state: {},
    //     // });
    //   }
    // }, [location]);

  return (
    <div>
      <Container>
      {/* <MapContainer center={state.currentLocation} zoom={state.zoom}> */}
      <MapContainer center={{lat: 4.6391857, lng:-74.1838036}} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Markers venues={state.data.venues} /> */}
    </MapContainer>
      </Container>
      </div>
  );
};
