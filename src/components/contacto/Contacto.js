import React from "react";
import Navbar from "../Navbar/Navbar";

import { Row, Col, Form, Button, Container} from 'react-bootstrap'
import { COLECCION, leerMensajes, guardarMensaje } from "./ContactoDB";
import "bootstrap/dist/css/bootstrap.min.css"
// import "./reservas.css";

const nombreClienteM = React.createRef();
const correoClienteM = React.createRef();
const mensaje = React.createRef();


const FormularioContacto = () => {

  

    const [setMensajes] = React.useState([]);
    
    const agregarMensaje = async () => {
      await guardarMensaje(COLECCION, nombreClienteM.current.value, correoClienteM.current.value, mensaje.current.value)
        .then(() => {
          leerMensajes(COLECCION)
            .then((data) => {
              setMensajes(data);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  

  return (
    <Container>
        
      <Row className="justify-content-md-center formReserva">
      <Col xs lg="6">
        <Form>
          <Form.Group className="mb-3" id="nombreClienteM">
            <Form.Control ref={nombreClienteM} type="text" placeholder="Nombre"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" id="correoClienteM">
              <Form.Control ref={correoClienteM} type="email" placeholder="Correo Electrónico"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" id="mensaje">
            <Form.Control ref={mensaje} as="textarea" rows={4} placeholder="Tu mensaje"></Form.Control>
          </Form.Group>
         
          <Form.Group className="mb-3" id="formSubmit">
            <Button onClick={() => agregarMensaje()} variant="primary" type="button">Enviar!</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
      
    </Container>
  );

};

export default FormularioContacto;
