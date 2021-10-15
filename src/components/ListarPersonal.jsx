import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const ListarPersonal = () => {

  const {perfil} = useSelector((store)=>store.perfil);
    console.log(perfil)
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Profesionales Disponibles</h1>
      <hr style={{ border: "5px solid violet" }} />
        <Table>
            <tbody>
            {perfil ? (
            perfil.map((perf, index) => (
              <tr key={index}>
                <td>
                  <div style={{width: "242px", height: "300px" }}>
                      <img src={perf.foto} alt="" />                  </div>
                </td>
                <td>
                  <h5>{perf.nombre} {perf.apellido}</h5>
                 <br/>
                 <h2>Especialista en: </h2>
                  <h2 className="text-warning">{perf.profesional}</h2>
                  <h2>Horarios Disponibles: {perf.horarios} </h2>
                  <h2>Descansas los días: {perf.horarios}</h2>
                  <h2>Sitios donde labora Local | Domicilio: {perf.sitio}</h2>
                  <button style={{width: "250px", height: "60px", background:'violet', color: 'black', borderRadius:'25px' }}
                >Ver Portafolio
                 </button>
                 </td>
                                
              </tr>
            ))
          ) : (
            <p>No se cargan datos</p>
          )}
            </tbody>
        </Table>
        </div>
  );
};

export default ListarPersonal;
