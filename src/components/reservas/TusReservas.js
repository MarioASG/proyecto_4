import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container, Spinner, Table, Form, Button } from "react-bootstrap";
import { db } from "../../database/firebase";
import "./reservas.css";
import "bootstrap/dist/css/bootstrap.min.css";

const queryCliente = React.createRef();
const queryCorreo = React.createRef();

export default function TusReservas() {
  const [reservas, setReservas] = useState([]);
  const [loadingData, setLoadingData] = useState();

  const obtenerReservaciones = async () => {
    const reservasCollectionRef = collection(db, "Reservas");
    const querySnapshot = await getDocs(reservasCollectionRef);
    const reservas = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setReservas(reservas);
    setLoadingData(false);
  };
  try {
    obtenerReservaciones();
  } catch (error) {
    setLoadingData(false);
    console.error(error);
  }

  

  return (
    <Container>
      <p>A continuación, podrá ver el listado de reservaciones realizadas</p>
      {loadingData ? (
        console.log('Cargando')
      ) : (
        <Table className="tusReservas" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>
                <Form.Group className="mb-3" id="queryCliente">
                  <Form.Control
                    ref={queryCliente}
                    type="text"
                    placeholder="Nombre"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" id="queryCorreo">
                  <Form.Control
                    ref={queryCorreo}
                    type="email"
                    placeholder="Correo Electrónico"
                  ></Form.Control>
                </Form.Group>
                
              </th>
            </tr>
            
          </thead>
          <tbody>
            {reservas.length === 0 ? (
              <tr>
                <td colSpan={4}>No hay reservas</td>
              </tr>
            ) : (
              reservas.map((reserva) => (
                <tr key={reserva.id}>
                  <td>
                    {reserva.nombreCliente == queryCliente.current.value || reserva.correoCliente == queryCorreo.current.value ? 
                    (
                      <p>Tiene una reserva para el dia {reserva.fechaReserva}, para {reserva.cantidadPersonas} personas </p>
                    ) : 
                    (
                      <p>No hay reservas con tu nombre o correo</p>
                    )}
                  </td>
                  
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
