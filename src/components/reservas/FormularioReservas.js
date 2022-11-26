import React from "react";

import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { COLECCION, guardarReserva } from "./ReservasDB";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reservas.css";

const cantidadPersonas = React.createRef();
const nombreCliente = React.createRef();
const correoCliente = React.createRef();
const fechaReserva = React.createRef();

const FormularioReservas = () => {
  const agregarReserva = async () => {
    try {
      await guardarReserva(
        COLECCION,
        nombreCliente.current.value,
        correoCliente.current.value,
        parseInt(cantidadPersonas.current.value),
        fechaReserva.current.value
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="tusReservas">
      <Container className="tituloReservas">
        <p>
          Aquí podrás hacer una reserva. Solo dinos el número de personas, y
          tendremos una mesa lista para ti
        </p>
      </Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Form>
            <Form.Group className="mb-3" id="nombreCliente">
              <Form.Control
                ref={nombreCliente}
                type="text"
                placeholder="Nombre"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" id="correoCliente">
              <Form.Control
                ref={correoCliente}
                type="email"
                placeholder="Correo Electrónico"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" id="cantidadPersonas">
              <Form.Control
                ref={cantidadPersonas}
                type="number"
                defaultValue={0}
                placeholder="Cantidad de Personas"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" id="fechaReserva">
              <Form.Control
                ref={fechaReserva}
                type="date"
                placeholder="Elija la fecha"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 btn" id="formSubmit">
              <Button
                onClick={() => agregarReserva()}
                variant="warning"
                type="button"
              >
                Reserva!!
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioReservas;
