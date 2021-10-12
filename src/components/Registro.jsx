import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fileUpload } from "../helpers/FileUpload";
import { swal } from "sweetalert";
import { useForm } from "../hooks/useFrom";
import {
  registerAsincronico,
  registerEmailPasswordNombre,
} from "../actions/actionRegister";
import { useDispatch } from "react-redux";

export const Registro = () => {
  const dispatch = useDispatch();

  const MostrarAlert = () => {
    return swal({
      icon: "success",
      title: "Usuario Registrado",
    });
  };

  const [values, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    repeatpassword: "",
    tipoUsuario: "",
    foto: "",
  });
  let { nombre, apellido, email, password, repeatpassword, tipoUsuario, foto } =
    values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      registerAsincronico(
        email,
        password,
        repeatpassword,
        nombre,
        apellido,
        tipoUsuario,
        foto
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
        foto = response;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container style={{ justifyContent: "center" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>
          Formulario de Registro de Usuario
        </h1>
        <hr style={{ border: "2px solid violet" }} />

        <Form onSubmit={handleRegistro}>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={apellido}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <Form.Label>Repita contraseña</Form.Label>
            <Form.Control
              type="password"
              name="repeatpassword"
              value={repeatpassword}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <Form.Label>
              Tipo de Usuario: Cliente | Administrador | Profesional
            </Form.Label>

            <Form.Control
              type="tipo"
              name="tipousuario"
              value={tipoUsuario}
              placeholder={tipoUsuario}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <div className="form-group col-md-4">
              <input
                id="fileSelector"
                type="file"
                name="file"
                onChange={handleFileChanged}
                value={foto}
                style={{ display: "none" }}
              />
              <button
                style={{
                  alignContent: "center",
                  width: "200px",
                  height: "80px",
                  margin: "10px",
                  background: "violet",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
                type="button"
                className="btn btn-success m-2"
                onClick={handlePictureClick}
              >
                <h5>Cargar Foto </h5>
              </button>
            </div>
          </Form.Group>

          <Container >
              <Button
                style={{
                  
                  alignContent: "center",
                  width: "200px",
                  height: "80px",
                  margin: "10px",
                  background: "violet",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
                type="submit"
              >
                <h3>Guardar</h3>
              </Button>
              <Button
                style={{
                  alignContent: "center",
                  width: "200px",
                  height: "80px",
                  margin: "10px",
                  background: "violet",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "25px",
                }}
              >
                <Link style={{ color: "black" }} to="/">
                  <h3>Login</h3>
                </Link>
              </Button>
          </Container>
        </Form>
      </div>
    </Container>
  );
};
