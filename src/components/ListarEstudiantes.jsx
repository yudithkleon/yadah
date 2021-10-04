import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'; 
import { eliminarAsincrono } from '../actions/actionEstudiante';

export const ListarEstudiantes = () => {

    const {estudiante} = useSelector(store => store.estudiante)
    
    const dispatch = useDispatch()
   
    return (
        <div>
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Telefono</th>
                        <th>Dirección</th>
                        <th>Celular</th>
                         <th>Correo</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       (estudiante) ? 
                       (
                        estudiante.map((estu, index)=>(

                            <tr key={index}>
                                <td>{estu.doc}</td> 
                                <td>{estu.nom}</td> 
                                <td>{estu.ape}</td> 
                                <td>{estu.tlf}</td> 
                                <td>{estu.cel}</td> 
                                <td>{estu.direc}</td> 
                                <td>{estu.email}</td> 
                                <td ><img src={estu.img}/></td> 
                                <td><button onClick={()=>dispatch(eliminarAsincrono(estu.email))}>Eliminar</button></td>
                               
                            </tr>
                        ))
                       )
                       : (<p>No se cargan datos</p>)
                    }
                </tbody>
            </Table>
            
        </div>
    )
 }

 