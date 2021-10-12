import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../actions/actionLogin";


export const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
  
    history.push("/login");
  };

  return (
    <div>
          <div>
        <Navbar bg="dark" variant="dark">
          <img
            style={{ width: "90px", borderRadius: "180px" }}
            src="https://res.cloudinary.com/danimel/image/upload/v1633805608/yadah/logo2_jdgwii.jpg"
            alt=""
          />

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "violet" }} href="/home">
                <Link
                  to="/principal"
                  style={{ color: "violet", fontSize: "14px", margin: "3px" }}
                >
                  <img
                    style={{ width: "40px", margin: "3px" }}
                    src="https://res.cloudinary.com/danimel/image/upload/v1633825804/house_sin7vi.png"
                  />
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Item>
                <Nav.Link
                  style={{ color: "violet", fontSize: "14px", margin: "3px" }}
                  eventKey="link-1"
                >
                  <Link
                    to="/portafolio"
                    style={{ color: "violet", margin: "3px" }}
                  >
                    <img
                      style={{ width: "40px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633825804/portfolio_kajvoz.png"
                    />
                     Agregar Portafolio
                  </Link>
                </Nav.Link>
              </Nav.Item>
                <Nav.Item>
                <Nav.Link
                  style={{ color: "violet", fontSize: "14px", margin: "3px" }}
                  eventKey="link-2"
                >
                  <img
                    style={{ width: "40px", margin: "3px" }}
                    src="https://res.cloudinary.com/danimel/image/upload/v1633826300/grupos_wpther.png"
                  />
                  Profesionales
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                
                <Nav.Link
                 
                  eventKey="link-4"
                > <Link to="/agendar" style={{ color: "violet", fontSize: "14px", margin: "3px" }}>
                  <img
                    style={{ width: "40px", margin: "3px" }}
                    src="https://res.cloudinary.com/danimel/image/upload/v1633826300/calendario_hihmwe.png"
                  />
                  Agendar Citas </Link>
                </Nav.Link>
                
                
              </Nav.Item>
              <Nav.Item>
            
                  <Nav.Link
                    style={{ color: "violet", fontSize: "14px", margin: "3px" }}
                    eventKey="link-5"
                  >
                  <Link  style={{ color: "violet", fontSize: "14px", margin: "3px" }} to="/servicios">
                    <img
                      style={{ width: "40px", margin: "3px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633826300/cliente_zpclyw.png"
                    />
                    Servicio
                    </Link>
                  </Nav.Link>
               
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  style={{ color: "violet", fontSize: "14px", margin: "3px" }}
                  eventKey="link-1"
                >
                  <Link to="/perfil" style={{ color: "violet", margin: "3px" }}>
                    <img
                      style={{ width: "40px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633825804/perfil_na6vdw.png"
                    />
                    Perfil
                  </Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Link eventKey={2} href="#memes">
                <Nav.Item>
                  <NavDropdown.Item
                    eventKey={2}
                    href="#action/3.4"
                    onClick={handleLogout}
                    style={{ color: "violet", fontSize: "14px", margin: "3px" }}
                    eventKey="link-7"
                  >
                    Logout{" "}
                    <img
                      style={{ width: "30px", margin: "3px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633823741/logout_1_jivecp.png"
                    />
                  </NavDropdown.Item>
                </Nav.Item>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
