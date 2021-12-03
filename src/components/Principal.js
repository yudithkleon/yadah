import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Conocenos } from "./Conocenos";

const Principal = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1633797304/yadah/4_jqmfwj.jpg"
            alt="First slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1633797305/yadah/7_eihm5w.jpg"
            alt="Second slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1633797305/yadah/2_rfn2pv.jpg"
            alt="Third slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1633797304/yadah/6_vnwjx6.jpg"
            alt="First slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1634334937/yadah/13_xzguxf.jpg"
            alt="Second slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1633797305/yadah/11u_b7kjpn.jpg"
            alt="First slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1633797304/yadah/3_wayuww.jpg"
            alt="Second slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1634334937/yadah/14_mixahw.jpg"
            alt="Third slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1634334949/yadah/12_g1xepm.jpg"
            alt="Third slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/danimel/image/upload/v1634334937/yadah/15_izu7fu.jpg"
            alt="Third slide"
            height="500px"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="text-center mt-3">
        <Link to="/agendar">
          <Button
            style={{
              width: "450px",
              height: "80px",
              background: "violet",
              color: "black",
              borderRadius: "25px",
            }}
          >
            <h1>Agendar Cita</h1>
          </Button>
        </Link>
      </Container>
      <Conocenos />
    </Container>
  );
};

export default Principal;
