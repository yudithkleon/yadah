import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/actionLogin";
import { useForm } from "../hooks/useFrom";
import {fileUpload} from "../helpers/FileUpload";
import {EstuAsincronico, ListarAsincronico} from "../actions/actionEstudiante"
import { ListarEstudiantes } from "./ListarEstudiantes";
import { Formulario } from "./Formulario";
 


export const Estudiantes = ({ history }) => {

  const dispatch = useDispatch();

  const  [ values, handleInputChange, reset ]= useForm ({
    documento: " ",
    nombres: " ",
    apellidos: " ",
    telefono: " ",
    celular: " ",
    direccion: " ",
    imagen:"", 
    email: " "
  })  
  let  {documento, nombres, apellidos, telefono, celular, direccion, email, imagen} = values;

  const handleRegistro = (e) =>{
      e.preventDefault();
      dispatch(EstuAsincronico(documento, nombres, apellidos, telefono, celular, direccion, email, imagen))
  }

  
  const handleLogout = () => {
    dispatch(logout());
    history.replace("/login");
  };

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
}
const handleFileChanged = (e) => {
   const file = e.target.files[0];
   fileUpload(file)
   .then(response => {
       imagen = response
       console.log(response);
   })
   .catch(error => {
       console.log(error.message);
   })
}

useEffect(() => {
    dispatch(ListarAsincronico())
}, [])


  return (
    <div>
      <form onSubmit={handleRegistro}>
        <h1>Estudiantes</h1>
        <div className="form-group">
          <div className="form-group col-md-4">
            <label htmlFor="documento">Documento</label>
            <input
              className="form-control"
              type="text"
              name="documento"
              value={documento}
              onChange={handleInputChange}
              id="documento"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="nombres">Nombres</label>
            <input
              className="form-control"
              type="text"
              name="nombres"
              value={nombres}
              onChange={handleInputChange}
              id="nombres"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="apellidos">Apellidos</label>
            <input
              className="form-control"
              type="text"
              name="apellidos"
              value={apellidos}
              onChange={handleInputChange}
              id="apellidos"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="telefono">Teléfono</label>
            <input
              className="form-control"
              type="text"
              name="telefono"
              value={telefono}
              onChange={handleInputChange}
              id="telefono"
            />
          </div>
      
          <div className="form-group col-md-4">
            <label htmlFor="celular">Celular</label>
            <input
              className="form-control"
              type="text"
              name="celular"
              value={celular}
              onChange={handleInputChange}
              id="celular"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="direccion">Dirección</label>
            <input
              className="form-control"
              type="text"
              name="direccion"
              value={direccion}
              onChange={handleInputChange}
              id="direccion"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="email">Email</label>
            <input className="form-control" type="text" name="email" id="email"
            value={email}
            onChange={handleInputChange}/>
          </div>
          <br />
          <div className="form-group col-md-4">
            <input
              id="fileSelector"
              type="file"
              name="file"
              
              onChange={handleFileChanged}
              value={imagen}
              style={{ display: "none" }}
            />
            <button type="button" className="btn btn-success m-2"
            onClick={handlePictureClick}
            >
              Imagen
            </button>
          </div>
          <div>
            <button className="btn btn-primary m-3">Guardar</button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary m-3"
              onClick={handleLogout}
      
            >
              Logout
            </button>
          </div>
        </div>
      </form>

     <ListarEstudiantes />
      </div>

  );
};
