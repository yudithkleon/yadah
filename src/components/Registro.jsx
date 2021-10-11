import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useFrom";
import { useFormik } from "formik";
import { registerEmailPasswordNombre } from "../actions/actionRegister";
import * as Yup from "yup";

export const Registro = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required(),
      apellido: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .required()
        .oneOf([Yup.ref("repeatpassword")]),
      repeatpassword: Yup.string().required(),
    }),

    onSubmit: (dato) => {
      console.log(dato);
    },
  });

  return (
    <Container style={{ justifyContent: "center" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Formulario de Registro de Usuario</h1>
        <hr style={{ border: "2px solid violet" }} />

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <Form.Label>Repita contraseña</Form.Label>
            <Form.Control
              type="password"
              name="repeatpassword"
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <select className="m-3" name="OS">
                <option value="1">Elige Tipo de usuario</option>
                <option value="2">Administrador</option>
                <option value="3">Cliente</option>
                <option value="3">Profesional</option>
              </select>
            <Form.Control
              type="tipo"
              name="tipousuario"
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="password"
              name="repeatpassword"
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Button  style={{
                          alignContent: "center",
                          width: "200px",
                          height: "80px",
                          margin: "10px",
                          background: "violet",
                          color: "black",
                          border: "1px solid black",
                          borderRadius: "25px",
                        }}  type="submit">
         <h3>Guardar</h3>
          </Button>

          <Button  style={{
                          alignContent: "center",
                          width: "200px",
                          height: "80px",
                          margin: "10px",
                          background: "violet",
                          color: "black",
                          border: "1px solid black",
                          borderRadius: "25px",
                        }}  type="submit">
           <h3> Eliminar</h3>
          </Button>
          
          <Button  style={{
                          alignContent: "center",
                          width: "200px",
                          height: "80px",
                          margin: "10px",
                          background: "violet",
                          color: "black",
                          border: "1px solid black",
                          borderRadius: "25px",
                        }}  type="submit">
           <h3>Modificar</h3>
          </Button>
          <Button  style={{
                          alignContent: "center",
                          width: "200px",
                          height: "80px",
                          margin: "10px",
                          background: "violet",
                          color: "black",
                          border: "1px solid black",
                          borderRadius: "25px",
                        }} >   <Link style={{ color:'black'}}to="/"><h3>Login</h3></Link></Button>
       
        </Form>
      </div>
    </Container>
  );
};
