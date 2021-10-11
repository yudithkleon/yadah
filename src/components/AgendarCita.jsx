import React, { useState } from "react";
import {
  Container,
  Button,
  Card,
  Row,
  CollapseProps,
  Col,
} from "react-bootstrap";
import CapLocalizacion from "./MapaLocalizacion/CapLocalizacion";

export const AgendarCita = () => {
  return (
    <Container>
      <div className="card mt-5">
        <div className="card-body">
          <form>
            {/* <form onSubmit={handleSubmit}> */}
            <h1 className="text-center bg-violet"> Agregar Citas</h1>
            <hr style={{ border: "4px solid violet" }} />
            <div>
              <select className="m-3" name="OS">
                <option value="1">Elige lugar de Servicio</option>
                <option value="2">Yadah Agencia de Belleza</option>
                <option value="3">Domicilio</option>
              </select>

              <input
                type="text"
                name="nombre"
                className="form-control m-2"
                placeholder="Ingrese dirección exacta"
                autoComplete="off"
                // value={nombre}
                // onChange={handleInputChange}
              />
            </div>
            <hr style={{ border: "2px solid violet" }} />
            <div>
              <Row>
                <Col style={{ marginLeft: "20px" }}>
                  <Card
                    style={{
                      width: "13rem",
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "13rem", padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633925373/u%C3%B1a_a3rwol.jpg"
                    />
                    <select name="OS">
                      <option value="1">Servicio de Uñas</option>
                      <option value="2">Manicure Tradicional</option>
                      <option value="3">Manicure Rusa</option>
                      <option value="4">Esmaltado Semipermanente </option>
                      <option value="5">
                        Uñas Acrilicas con Tips, esmaltado Tradicional
                      </option>
                      <option value="6">
                        Uñas Acrilicas, Esculpidas, esmaltado Tradicional
                      </option>
                      <option value="7">
                        Uñas Acrilicas con Tips, esmaltado Semipermanente
                      </option>
                      <option value="8">
                        Uñas Acrilicas, Esculpidas, esmaltado Semipermanente
                      </option>
                      <option value="9">
                        Uñas Acrilicas con Tips, Incrustaciones
                      </option>
                      <option value="10">
                        Uñas Acrilicas, Esculpidas,Incrustaciones
                      </option>
                      <option value="11">
                        Uñas Acrilicas con Tips, BabyBomer | Ombre|{" "}
                      </option>
                      <option value="12">
                        Uñas Acrilicas, Esculpidas, BabyBoomeres | Ombre
                      </option>
                      <option value="13">Uñas de Gel Esculpidas</option>
                      <option value="14">Uñas PoliGel | TecniGel</option>
                      <option value="15">
                        Mantenimiento de Uñas Acrilicas
                      </option>
                      <option value="16">Pedicure Tradicional</option>
                      <option value="17">Pedicure Semipermanente</option>
                      <option value="18">Otro</option>
                    </select>
                  </Card>
                </Col>

                <Col>
                  <Card
                    style={{
                      width: "13rem",
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "13rem", padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633924935/For_perfect_eyebrows_you_need_onions___-_Nature_And_Society_Magazine_lzjdfl.png"
                    />
                    <select className="m-2" name="OS">
                      <option value="1">Servicio de Cejas</option>
                      <option value="2">Depilación con Cera</option>
                      <option value="3">Depilación con Hilo</option>
                      <option value="4">Depilación con Cuchilla</option>
                      <option value="5">Pigmentación o Semipermanente</option>
                      <option value="6">Nanoblading</option>
                      <option value="7">Microblading </option>
                      <option value="8">Shading o Micropigmentación</option>
                      <option value="9">Otro</option>
                    </select>
                  </Card>
                </Col>

                <Col>
                  <Card
                    style={{
                      width: "13rem",
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "13rem", padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633924165/Extensiones_de_Pesta%C3%B1as_XD_Blink_kwnolo.jpg"
                    />
                    <select className="m-2" name="OS">
                      <option value="1">Servicio de Pestaña</option>
                      <option value="2">Pestañas Pelo a Pelo</option>
                      <option value="3">Pestañas Punto a Punto </option>
                      <option value="4">Lifting de pestañas</option>
                      <option value="5">Pestañas Magneticas</option>
                      <option value="6">Otro</option>
                    </select>
                  </Card>
                </Col>
              </Row>

              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">
                  Observaciónes:{" "}
                </label>
                <div className="form-group">
                  <textarea
                    name="sintomas"
                    className="form-control"
                    autoComplete="off"
                    //  value={sintomas}
                    // onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="orm-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">
                  Nombre de Cliente
                </label>
                <div className="mb-4 mb-lg-0">
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    // value={nombre}
                    // onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group row mt-3">
                <label className="col-sm-4 col-lg-2 col-form-label">
                  Fecha para la cita
                </label>
                <div className="form-group col-sm-8 col-lg-4">
                  <input
                    type="date"
                    name="fecha"
                    className="form-control"
                    autoComplete="off"
                    // value={fecha}
                    // onChange={handleInputChange}
                  />
                </div>

                <label className="col-sm-4 col-lg-2 col-form-label">
                  Hora para la cita
                </label>
                <div className="form-group col-sm-8 col-lg-4">
                  <input
                    type="time"
                    name="hora"
                    className="form-control"
                    autoComplete="off"
                    // value={hora}
                    // onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <hr style={{ border: "2px solid violet" }} />

            <div>
            <h3>Datos del profesional que desee que le realice el servicio </h3>
              <Row>
                <Col>
                  <Card
                    style={{
                      margin: "20px",
                      width: "10rem",
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "10rem", padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633926877/1001_conseils_et_id%C3%A9es_pour_adopter_le_carr%C3%A9_ondul%C3%A9_dhnx2u.png"
                    />
                    <select className="m-2" name="OS">
                      <option value="1">Nombre del Profesional</option>
                      <option value="2">Maria Monsalve</option>
                      <option value="3">Yudith Leon</option>
                      <option value="4">Marisol Carrero</option>
                      <option value="5">Sandra Pabon</option>
                      <option value="6">Otro</option>
                    </select>
                  </Card>
                </Col>

                <Col>
                  <Button
                    style={{
                      width: "350px",
                      height: "80px",
                      margin: "50px",
                      background: "violet",
                      color: "black",
                      border: "1px solid black",
                      borderRadius: "25px",
                    }}
                  >
                    <h4>Horarios Disponible</h4>
                  </Button>
                  <Button
                    style={{
                      alignContent: "center",
                      width: "350px",
                      height: "80px",
                      margin: "40px",
                      background: "violet",
                      color: "black",
                      border: "1px solid black",
                      borderRadius: "25px",
                    }}
                  >
                    <h4>Guardar Cita</h4>
                  </Button>
                </Col>
              </Row>
            </div>
          </form>
        </div>
      </div>

      <CapLocalizacion />
    </Container>
  );
};
