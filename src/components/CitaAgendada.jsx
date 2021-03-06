import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  AgendarAsincronico, ListarAsincronico,

} from "../actions/actionAgendarCita";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import CapLocalizacion from "./MapaLocalizacion/CapLocalizacion";
import { useForm } from "../hooks/useFrom";


export const AgendarCita = () => {
  
  const {portafolio} = useSelector((store) => store.portafolio);
  const {perfil}= useSelector((store)=> store.perfil);

  
  console.log("nuevo perfil")
  console.log(perfil)

  console.log("nuevo portafolio")
  console.log(portafolio)

  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    id,
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
    id,
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
      AgendarAsincronico(
        id,
        lugar,
        direc,
        servicio,
        observacion,
        cliente,
        email,
        fecha,
        hora,
        profesional
      )
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
                  <div>
                    
                      <select className="m-3" name="OS" onChange={handleInputChange}>
                      <option value="1">Elige lugar de Servicio</option>
                      <option value="2">
                        Yadah Agencia de Belleza
                      </option>
                      <option >Domicilio</option>
                    </select>

                    <input
                      type="text"
                      name="nombre"
                      className="form-control m-2"
                      placeholder="Ingrese direcci??n exacta"
                      autoComplete="off"
                      value={direc}
                      onChange={handleInputChange}
                    />
                  </div>
                  <hr style={{ border: "2px solid violet" }} />
                  <div>
                    <Row>
                      <Col style={{ marginLeft: "20px" }}>
                        {
                        portafolio.map((porta, index)=>(
                            <div key={index}>
                              <select name="" id="">
                                <option> otro: {porta.nomTec}

                                </option>
                              </select>

                            </div>
                          ))
                        }
      
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
                          <select name="OS" onChange={handleInputChange}>
                            <option value={servicio}>Servicio de U??as</option>
                            <option value={servicio}>Manicure Tradicional</option>
                            <option value={servicio}>Manicure Rusa</option>
                            <option value={servicio}>
                              Esmaltado Semipermanente{" "}
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas con Tips, esmaltado Tradicional
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas, Esculpidas, esmaltado Tradicional
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas con Tips, esmaltado Semipermanente
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas, Esculpidas, esmaltado Semipermanente
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas con Tips, Incrustaciones
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas, Esculpidas,Incrustaciones
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas con Tips, BabyBomer | Ombre|{" "}
                            </option>
                            <option value={servicio}>
                              U??as Acrilicas, Esculpidas, BabyBoomeres | Ombre
                            </option>
                            <option value={servicio}>U??as de Gel Esculpidas</option>
                            <option value={servicio}>U??as PoliGel | TecniGel</option>
                            <option value={servicio}>
                              Mantenimiento de U??as Acrilicas
                            </option>
                            <option value={servicio}>Pedicure Tradicional</option>
                            <option value={servicio}>Pedicure Semipermanente</option>
                            <option value={servicio}>Otro</option>
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
                            className="m-2"
                            name="OS"
                            onChange={handleInputChange}
                          >
                            <option value="Servicio de Cejas">Servicio de Cejas</option>
                            <option value={servicio}>Depilaci??n con Cera</option>
                            <option value={servicio}>Depilaci??n con Hilo</option>
                            <option value={servicio}>Depilaci??n con Cuchilla</option>
                            <option value={servicio}>
                              Pigmentaci??n o Semipermanente
                            </option>
                            <option value={servicio}>Nanoblading</option>
                            <option value={servicio}>Microblading </option>
                            <option value={servicio}>
                              Shading o Micropigmentaci??n
                            </option>
                            <option value={servicio}>Otro</option>
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
                            className="m-2"
                            name="OS"
                            onChange={handleInputChange}
                          >
                            <option value={servicio}>Servicio de Pesta??a</option>
                            <option value={servicio}>Pesta??as Pelo a Pelo</option>
                            <option value={servicio}>Pesta??as Punto a Punto </option>
                            <option value={servicio}>Lifting de pesta??as</option>
                            <option value={servicio}>Pesta??as Magneticas</option>
                            <option value={servicio}>Otro</option>
                          </select>
                        </Card>
                      </Col>
                    </Row>

                    <div className="form-group row">
                      <label className="col-sm-4 col-lg-2 col-form-label">
                        Observaci??nes:{" "}
                      </label>
                      <div className="form-group">
                        <textarea
                          name="observacion"
                          className="form-control"
                          autoComplete="off"
                          value={observacion}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="orm-group row">
                      <label className="col-sm-4 col-lg-2 col-form-label">
                        Nombre de Cliente:
                      </label>
                      <div className="mb-4 mb-lg-0">
                        <input
                          type="text"
                          name="cliente"
                          className="form-control"
                          placeholder="Tu nombre"
                          autoComplete="off"
                          value={cliente}
                          onChange={handleInputChange}
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
                          value={fecha}
                          onChange={handleInputChange}
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
                          value={hora}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <hr style={{ border: "2px solid violet" }} />

                  <div>
                    <h3>
                      Datos del profesional que desee que le realice el servicio{" "}
                    </h3>
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
