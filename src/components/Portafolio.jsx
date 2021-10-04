import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/actionLogin";
import { useForm } from "../hooks/useFrom";
import {fileUpload} from "../helpers/FileUpload";
import {PortaAsincronico, ListarAsincronico} from "../actions/actionsPortafolio";
import { ListarPortafolio } from "./ListarPortafolio";
import {swal} from "sweetalert";
 


export const Portafolio = ({ history }) => {

  const dispatch = useDispatch();

  const  [ values, handleInputChange]= useForm ({
    nomProfesional: " ",
    email: " ",
    descripcionServicio: " ",
    nomTecnica:"",
    precio:"",
    imagen:""
   
  })  
  let  {nomProfesional, email,   descripcionServicio,   nomTecnica,   precio,   imagen} = values;

  const handleRegistro = (e) =>{
      e.preventDefault();
      dispatch(PortaAsincronico(nomProfesional, email,   descripcionServicio,   nomTecnica,   precio,   imagen))
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
        <h1>Portafolios</h1>
        <div className="form-group">
          <div className="form-group col-md-4">
            <label htmlFor="nomProfesional">Nombre de Profesional</label>
            <input
              className="form-control"
              type="text"
              name="nomProfesional"
              value={nomProfesional}
              onChange={handleInputChange}
              id="nomProfesional"
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="email">Email de Profesional</label>
            <input className="form-control" type="text" name="email" id="email"
            value={email}
            onChange={handleInputChange}/>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="descripcionServicio">Descripción de el Servicio</label>
            <input
              className="form-control"
              type="text"
              name="descripcionServicio"
              value={descripcionServicio}
              onChange={handleInputChange}
              id="descripcionServicio"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="nomTecnica">Nombre de la Tecnica</label>
            <input
              className="form-control"
              type="text"
              name="nomTecnica"
              value={nomTecnica}
              onChange={handleInputChange}
              id="nomTecnica"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="precio">Precio de este Servicio $:</label>
            <input
              className="form-control"
              type="text"
              name="precio"
              value={precio}
              onChange={handleInputChange}
              id="precio"
            />
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
              Cargar Imagen
            </button>
          </div>

          <div>
            <button className="btn btn-primary m-3">Guardar</button>
          </div>
        
        </div>
      </form>
      <div>
           
           <button
             type="button"
             className="btn btn-primary m-3 "
             onClick={handleLogout}
                 >
             Logout
           </button>
         </div>
     <ListarPortafolio />
      </div>

  );
};

