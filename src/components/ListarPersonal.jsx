import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ListarPersonal = () => {

  const {perfil} = useSelector((store)=>store.perfil);
  
 console.log('en perfil que hay')
 console.log(perfil)

   return (
    <div>
      <h1 style={{ textAlign: "center" }}>Profesionales Disponibles</h1>
      <hr style={{ border: "5px solid violet" }} />
        <Table>
            <tbody>
            {
                perfil ? (
          
                    perfil.map((perf, index) => (
                      
                        <tr key={index}>
                          <td>
                            <div >
                                <img  style={{width: "242px", height: "300px" }}src={perf.foto} alt="" />
                            </div>
                          </td>
                          <td>
                              <h2>{perf.nombre} {perf.apellido}</h2>
                            <br/>
                            <h2>Especialista en: {perf.profesion} </h2>
                              <h4>Horarios Disponibles: {perf.horarios} </h4>
                              <h4>Descansas los días: {perf.descanso}</h4>
                              <h4>Sitios donde labora Local | Domicilio: {perf.sitio}</h4>
                              <Link to="/LisPortafolioCliente">
                                <button style={{width: "250px", height: "60px", background:'violet', color: 'black', borderRadius:'25px' }}
                                   >Ver Portafolio
                               </button>
                              </Link>
                          </td>
                                          
                        </tr>
                    ))
                  ) : (
                <p>No se cargan datos</p>
              )
            }
            </tbody>
        </Table>
        </div>
  );
};

export default ListarPersonal
