import React, { useEffect, useState } from "react";


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
        <div>
          <h1>Ubicación Actual</h1>
          <p>Latitude: {state.latitude}</p>
          <p>longitude: {state.longitude}</p>
    
          {/* <Link
            to={{
              pathname: "/map",
              // state: {
              //   hello: 'world'
              // }
              state,
            }}
          >
            Ver en Mapa
          </Link> */}
        </div>
      );
}

export default CapLocalizacion
