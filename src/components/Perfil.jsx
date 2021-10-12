import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, FormLabel } from "react-bootstrap";
import { height } from "dom-helpers";
import Button from "@restart/ui/esm/Button";

const Perfil = () => {
  // const {perfil} =  useSelector((store) => store.perfil)
  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Bienvenido</h1>
      <hr style={{ border: "2px solid violet" }} />
      <Container>
        <Row>
          <Col>
            <img
              style={{ height: "40" }}
              src="https://res.cloudinary.com/danimel/image/upload/v1633926876/Bobbi_Boss_Short_Kamoi_Wig_Synthetic_fa1dk9.jpg"
              alt=""
            />
            {/* <input
                id="fileSelector"
                type="file"
                name="file"
                // onChange={handleFileChanged}
                // value={foto}
                // style={{ display: "none" }}
              /> */}
            <button
              style={{
                alignContent: "center",
                width: "150px",
                height: "60px",
                margin: "10px",
                background: "violet",
                color: "black",
                border: "1px solid black",
                borderRadius: "25px",
              }}
              type="button"
              className="btn btn-success m-2"
              // onClick={handlePictureClick}
            >
              <h5>Editar</h5>
            </button>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Sexo</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
              </Form.Group>
              <button
              style={{
                alignContent: "center",
                width: "190px",
                height: "60px",
                margin: "10px",
                background: "violet",
                color: "black",
                border: "1px solid black",
                borderRadius: "25px",
              }}
              type="button"
              className="btn btn-success m-2"
              // onClick={handlePictureClick}
            >
              <h5>Editar</h5>
            </button>
            </Form>
          </Col>
        </Row>
            <Container>
            <h1 style={{ textAlign: "center" }}>Solo para el Profesional</h1>
                 <hr style={{ border: "2px solid violet" }} />
                 <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Tipo de Porfesional: Estilista Integral | Manicurista | Cejas | Pestañas</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Tipo de Trabajos que Realiza</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Sitio de Trabajo: Local | Domicilio | Ambas</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Descanso: Lunes| Martes| Miercoles| Jueves | Viernes| Sabado | Domingo</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
                 <Form.Label>Horarios Diponibles: Ejemplo 6:am a 10: pm</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
              </Form.Group>
              <button
              style={{
                alignContent: "center",
                width: "190px",
                height: "60px",
                margin: "20px",
                background: "violet",
                color: "black",
                border: "1px solid black",
                borderRadius: "25px",
              }}
              type="button"
              className="btn btn-success m-2"
              // onClick={handlePictureClick}
            >
              <h5>Guardar</h5>
             
            </button>

            <button
              style={{
                alignContent: "center",
                width: "190px",
                height: "60px",
                margin: "20px",
                background: "violet",
                color: "black",
                border: "1px solid black",
                borderRadius: "25px",
              }}
              type="button"
              className="btn btn-success m-2"
              // onClick={handlePictureClick}
            >
              <h5>Editar</h5>
            </button>
            </Container>

      </Container>
    </div>
  );
};

export default Perfil;
