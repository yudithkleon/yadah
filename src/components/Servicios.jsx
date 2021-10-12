import React from 'react'
import { Container, Row, Col, Card, Form} from 'react-bootstrap'
import LisPortafolioCliente from './LisPortafolioCliente'

const Servicios = () => {
    return (
        <div>
             <div>
            <h1 style={{ justifyContent: "center" }}>Portafolios de servicio Disponible</h1>
             <hr style={{ border: "4px solid violet" }} />
            <Container>
           
              <Row style={{margin: '20px'}}>
                <Col style={{ marginLeft: "20px" }}>
                  <Card
                    style={{
                      width: "13rem",
                      height:"17rem", 
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "13rem", height:"15rem", padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633366181/qgggftgjzgdtekh3h1qx.jpg"
                    />
                    <select name="OS">
                      <option value="1">Buscar uñas:</option>
                      <option value="2">Manicure Tradicional</option>
                      <option value="3">Manicure Rusa</option>
                      <option value="4">Esmaltado Semipermanente </option>
                      <option value="5">Uñas Acrilicas </option>
                      <option value="13">Uñas de Gel Esculpidas</option>
                      <option value="14">Uñas PoliGel | TecniGel</option>
                      <option value="15">Mantenimiento de Uñas Acrilicas</option>
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
                      height:"17rem",
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "13rem", height:"15rem",  padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633924935/For_perfect_eyebrows_you_need_onions___-_Nature_And_Society_Magazine_lzjdfl.png"
                    />
                    <select className="m-2" name="OS">
                      <option value="1">Buscar Cejas</option>
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
                      height:"17rem",
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "13rem", height:"15rem", padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1634004980/Extension_ciglia_come_ottenere_il_meglio_dell_allungamento_-_copia_fhx0rk.png"
                    />
                    <select className="m-2" name="OS">
                      <option value="1">Buscar Pestaña</option>
                      <option value="2">Pestañas Pelo a Pelo</option>
                      <option value="3">Pestañas Punto a Punto </option>
                      <option value="4">Lifting de pestañas</option>
                      <option value="5">Pestañas Magneticas</option>
                      <option value="6">Otro</option>
                    </select>
                  </Card>

                </Col>

                <Col>
                  <Card
                    style={{
                      width: "13rem",
                      height:"17rem",
                      boxShadow: "2px 25px 60px violet",
                    }}
                  >
                    <img
                      style={{ width: "13rem", height:"15rem", padding: "20px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633926877/1001_conseils_et_id%C3%A9es_pour_adopter_le_carr%C3%A9_ondul%C3%A9_dhnx2u.png"
                    />
                    <select className="m-2" name="OS">
                    <option value="1">Buscar Nombre</option>
                      <option value="2">Maria Monsalve</option>
                      <option value="3">Yudith Leon</option>
                      <option value="4">Marisol Carrero</option>
                      <option value="5">Sandra Pabon</option>
                      <option value="6">Otro</option>
                    </select>
                  </Card>

                </Col>
                
                <Form.Label>Buscar</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                //   value={nombre}
                //   onChange={handleInputChange}
                />
              </Row>

               <LisPortafolioCliente  style={{margin: '40px'}}/>
            </Container>
        </div>
        </div>
    )
}

export default Servicios
