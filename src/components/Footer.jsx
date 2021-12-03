import React from "react";
import { Mapa } from "./MapaLocalizacion/Mapa";

export const Footer = () => {
  return (
    <div style={{ background: "black", color: "white" }}>
      <div className="text-center" >
        <h3 >Contactanos</h3>
        <p>300-7706748  |  315-298641  |  315-8764067</p>
      </div>

      <div className="text-center">
        <p>Ubicanos en el Centro Comercial Trebolis Calle 50 Sur, 93 D-97, Bosa Porvenir- Bogota</p>
        <Mapa/>
      </div>
    </div>
  );
};
