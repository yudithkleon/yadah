import { Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useFrom';
import {registerEmailPasswordNombre} from '../actions/actionRegister'


export const Registro = () => {
 
    const dispatch = useDispatch();

        const [formValues, handleInputChange]= useForm({

        nombre: 'Alejandro',
        email:'alejandroramirez715@gmail.com',
        password1: '123456',
        password2:'123456'

    })

    const {nombre, email, password1, password2}=formValues;


    const handleRegister=(e)=>{
        e.preventDefault();
        dispatch(registerEmailPasswordNombre(email, password1, nombre))
    }

    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password1"
                        value={password1}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/">Login</Link>

            </Form>

        </div>
    )
}