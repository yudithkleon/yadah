import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "../hooks/useFrom";
import { fileUpload } from "../helpers/FileUpload";
import {
  PortaAsincronico,
  ListarAsincronico,
} from "../actions/actionsPortafolio";
import { ListarPortafolio } from "./ListarPortafolio";
import { swal } from "sweetalert";
import {Container, Row, Col} from "react-bootstrap";

export const Portafolio = () => {
 
  const dispatch = useDispatch();

const MostrarAlert=()=>{
    return(
        swal({
            icon: "success",
            text: "foto Agregada",
 })
    )
}

const MostrarAlert1=()=>{
  return(
      swal({
          icon: "success",
          text: " Usuario Registrado",
           
        })
  )
}

  const [values, handleInputChange] = useForm({
    nomProfesional: " ",
    email: " ",
    descripcionServicio: " ",
    nomTecnica: "",
    precio: "",
    imagen: "",
  });
  let {
    nomProfesional,
    email,
    descripcionServicio,
    nomTecnica,
    precio,
    imagen,
  } = values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      PortaAsincronico(
        nomProfesional,
        email,
        descripcionServicio,
        nomTecnica,
        precio,
        imagen
      )
    );
  };

  

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        imagen = response;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    dispatch(ListarAsincronico());
  }, []);

  return (
    <Container style={{ alignContent: "center" }}>
      <div style={{ alignContent: "center" }}>
        <form onSubmit={handleRegistro}>
          <h1 style={{ textAlign: "center" }}>Crear su Portafolio</h1>
          <hr style={{ border: "2px solid violet" }} />

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
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="descripcionServicio">
                Descripción de el Servicio
              </label>
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
            
              <Row>
            
                <Col>
                <div className="form-group col-md-4">
              <input
                id="fileSelector"
                type="file"
                name="file"
                onChange={handleFileChanged}
                value={imagen}
                style={{ display: "none" }}
              />
              <button
                style={{
                  width: "350px",
                  margin: "20px",
                  height: "80px",
                  background: "violet",
                  color: "black",
                  borderRadius: "25px",
                }}
                type="button"
                onClick={()=>{handlePictureClick();} }
              >
                <h4>Cargar Imagen</h4>
              </button>
              </div>
                </Col>
                        <Col>
                        <button
                    style={{
                      width: "350px",
                      height: "80px",
                      margin: "20px",
                      background: "violet",
                      color: "black",
                      borderRadius: "25px",
                        }} 
                        type="submit" 
                  
                  >
                    <h4> Guardar</h4>
                  </button>
                          </Col>
                   
            </Row>
         
        </div>  
      </form> 
            
        <ListarPortafolio />
      </div>
    </Container>
  );
};
