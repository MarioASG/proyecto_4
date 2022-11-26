import React from "react";
import { collection, getDocs, where, query} from "firebase/firestore";
import {  useState } from "react";
import { Container, Form, Table, Spinner, Button  } from "react-bootstrap";
import { db } from "../../database/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reservas.css";

const queryCliente = React.createRef();
const queryCorreo = React.createRef();

export default function TusReservas() {
  const [reservas, setReservas] = useState([]);
  const [loadingData, setLoadingData] = useState( false );

  const obtenerReservaciones = async ( cliente, correo ) => {
    setLoadingData( true );
    const restricciones = [ where( 'nombreCliente', '==', cliente ), where( 'correoCliente', '==', correo ) ];
    const reservasCollectionRef = collection(db, "Reservas");
    const q = query( reservasCollectionRef, ...restricciones )
    const querySnapshot = await getDocs(q);
    const misReservas = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setReservas(misReservas);
    setLoadingData(false);
  };
  
  return (
    <Container className="tusReservas">
      <Container className="tituloReservas">
      <p>Ingresa tus datos para verificar tus reservas</p>
      </Container>
      <Form>
        <Form.Group className="mb-3" id="queryCliente">
          <Form.Control
            ref={ queryCliente }
            type="text"
            placeholder="Nombre"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" id="queryCorreo">
          <Form.Control
            ref={ queryCorreo }
            type="email"
            placeholder="Correo Electrónico"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3 btn" id="querySubmit">
        <Button variant="warning" type="button" onClick={ () => obtenerReservaciones( queryCliente.current.value.toUpperCase(), queryCorreo.current.value.toLowerCase() ) }>Solicitar Información</Button>
        </Form.Group>
        
      </Form>
      {
        loadingData ? (
          <Spinner animation="border" role="status">
          </Spinner>
        ) : (
          <Table className="justify-content-md-center mt-4" striped bordered hover variant="dark">
            <tbody>
              {
                reservas.length === 0 ? (
                  <tr>
                    <td colSpan={ 4 }>No tienes reservas</td>
                  </tr>
                ) : (
                  reservas.map( ( reserva ) => (
                    <tr key={ reserva.id }>
                      <td>
                        <p>Tiene una reserva para el dia { reserva.fechaReserva }, para { reserva.cantidadPersonas } personas </p>
                      </td>
                    </tr>
                  ) )
                ) }
            </tbody>
          </Table>
        )
      }
    </Container>
  );
}
