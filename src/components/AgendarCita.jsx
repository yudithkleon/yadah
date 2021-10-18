import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AgendarAsincronico,
  ListarAsincronico,
} from "../actions/actionAgendarCita";
import { Container, Button, Card, Row, Col, FormLabel } from "react-bootstrap";
import CapLocalizacion from "./MapaLocalizacion/CapLocalizacion";
import { useForm } from "../hooks/useFrom";


export const AgendarCita = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
      lugar: "",
    direc: "",
    servicio: "",
    observacion: "",
    cliente: "",
    email: "",
    fecha: "",
    hora: "",
    profesional: "",
  });
  let {
    lugar,
    direc,
    servicio,
    observacion,
    cliente,
    email,
    fecha,
    hora,
    profesional,
  } = values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      AgendarAsincronico(values)
    );
  };

  useEffect(() => {
    dispatch(ListarAsincronico());
  }, []);

  return (
    <Container>
      <div className="card mt-5">
        <div className="card-body">

          <form onSubmit={handleRegistro}>

            
            <h1 className="text-center bg-violet"> Agregar Citas</h1>
            <hr style={{ border: "4px solid violet" }} />

            <div className="form-group row">
              <div>
                <FormLabel>
                  Lugar de Servicio: Domicilio | YADAH Agencia de Belleza
                </FormLabel>
                 <select  defaultValue={"1"} className="m-3" name="lugar" onChange={handleInputChange}>
                        <option value="1" disabled>Elige lugar de Servicio</option>
                        <option value="local">Yadah Agencia de Belleza</option>
                        <option value="Domicilio" >Domicilio</option>
                      </select>
              </div>

              <FormLabel>Ingrese Dirección exacta</FormLabel>
              <input
                type="text"
                name="direc"
                className="form-control m-2"
                placeholder="Ingrese dirección exacta"
                autoComplete="off"
                value={direc}
                onChange={handleInputChange}
              />

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
                          <select defaultValue={"1"} name="servicio" onChange={handleInputChange}>
                            <option value="1" disabled>Servicio de Uñas</option>
                            <option value="Manicure Tradicional">Manicure Tradicional</option>
                            <option value="Manicure Rusa">Manicure Rusa</option>
                            <option value="Esmaltado Semipermanente">
                              Esmaltado Semipermanente
                            </option>
                            <option value="Uñas Acrilicas con Tips, esmaltado Tradicional">
                              Uñas Acrilicas con Tips, esmaltado Tradicional
                            </option>
                            <option value="Uñas Acrilicas, Esculpidas, esmaltado Tradicional">
                              Uñas Acrilicas, Esculpidas, esmaltado Tradicional
                            </option>
                            <option value="Uñas Acrilicas con Tips, esmaltado Semipermanente">
                              Uñas Acrilicas con Tips, esmaltado Semipermanente
                            </option>
                            <option value="Uñas Acrilicas, Esculpidas, esmaltado Semipermanente">
                              Uñas Acrilicas, Esculpidas, esmaltado Semipermanente
                            </option>
                            <option value="Uñas Acrilicas con Tips, Incrustaciones">
                              Uñas Acrilicas con Tips, Incrustaciones
                            </option>
                            <option value="Uñas Acrilicas, Esculpidas,Incrustaciones">
                              Uñas Acrilicas, Esculpidas,Incrustaciones
                            </option>
                            <option value="Uñas Acrilicas con Tips, BabyBomer | Ombre">
                              Uñas Acrilicas con Tips, BabyBomer | Ombre
                            </option>
                            <option value="Uñas Acrilicas, Esculpidas, BabyBoomeres | Ombre">
                              Uñas Acrilicas, Esculpidas, BabyBoomeres | Ombre
                            </option>
                            <option value="Uñas de Gel Esculpidas">Uñas de Gel Esculpidas</option>
                            <option value="Uñas PoliGel">Uñas PoliGel | TecniGel</option>
                            <option value="Mantenimiento de Uñas Acrilicas"> Mantenimiento de Uñas Acrilicas</option>
                            <option value="Pedicure Tradicional">Pedicure Tradicional</option>
                            <option value="Pedicure Semipermanente">Pedicure Semipermanente</option>
                            <option value="Otro">Otro</option>
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
                          <select
                            className="servicio"
                            name="servicio"
                            onChange={handleInputChange}
                          >
                            <option value="1">Servicio de Cejas</option>
                            <option value="Depilación con Cera">Depilación con Cera</option>
                            <option value="Depilación con Hilo">Depilación con Hilo</option>
                            <option value="Depilación con Cuchilla">Depilación con Cuchilla</option>
                            <option value="Pigmentación o Semipermanente">
                              Pigmentación o Semipermanente
                            </option>
                            <option value="Nanoblading">Nanoblading</option>
                            <option value="Microblading">Microblading</option>
                            <option value="Shading o Micropigmentación">
                              Shading o Micropigmentación
                            </option>
                            <option value="Otro">Otro</option>
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
                          <select
                            className="servicio"
                            name="OS"
                            onChange={handleInputChange}
                          >
                            <option value="1">Servicio de Pestaña</option>
                            <option value="Pestañas Pelo a Pelo">Pestañas Pelo a Pelo</option>
                            <option value="Pestañas Punto a Punto">Pestañas Punto a Punto </option>
                            <option value="Lifting de pestañas">Lifting de pestañas</option>
                            <option value="Pestañas Magneticas">Pestañas Magneticas</option>
                            <option value="Otro">Otro</option>
                          </select>
                        </Card>
                      </Col>
                    </Row>
              
                  <input
                    name="observacion"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Manicure Tradicional | Uñas Semipermanente | Depilación de Cejas | Pestañas"
                    value={observacion}
                    onChange={handleInputChange}
                  />
          
             <FormLabel>Nombre de Cliente: </FormLabel>
                   <input
                    type="text"
                    name="cliente"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={cliente}
                    onChange={handleInputChange}
                  />
            
            <FormLabel>Fecha para la cita </FormLabel>
             <div className="form-group col-sm-8 col-lg-4">
                  <input
                    type="date"
                    name="fecha"
                    className="form-control"
                    autoComplete="off"
                    value={fecha}
                    onChange={handleInputChange}
                  />
                </div>

                <FormLabel>Hora de la cita </FormLabel>
                  <div className="form-group col-sm-8 col-lg-4">
                  <input
                    type="time"
                    name="hora"
                    className="form-control"
                    autoComplete="off"
                    value={hora}
                    onChange={handleInputChange}
                  />
                </div>


                  <select defaultValue={"1"} onChange={handleInputChange} className="m-2" name="profesional">
                      <option  value="1" disabled>Buscar Nombre</option>
                        <option value="Maria Monsalve">Maria Monsalve</option>
                        <option value="Yudith Leon">Yudith Leon</option>
                        <option value="Marisol Carrero">Marisol Carrero</option>
                        <option value="Sandra Pabon">Sandra Pabon</option>
                        <option value="Otro">Otro</option>
                      </select>
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
                    }} type="submit"
                  >
                    <h4>Guardar Cita</h4>
                  </Button>
              
            </div>
          </form>
        </div>
      </div>

      <CapLocalizacion />
    </Container>
  );
};
