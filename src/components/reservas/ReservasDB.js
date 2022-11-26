import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../../database/firebase";

const COLECCION = "Reservas";

const leerReservas = async (coleccion) => {
  try {
    const reservas = await getDocs(collection(db, coleccion));
    let arrReservas = reservas.docs.map(doc => (doc.data()));
    
    return arrReservas;
  } catch (error) {
    console.log("Error leyendo los datos: ", error);
  }
}

const guardarReserva = async (coleccion, nombreCliente, correoCliente, cantidadPersonas, fechaReserva ) => {
  try {
    await addDoc(collection(db, coleccion),
      {
        nombreCliente: nombreCliente,
        correoCliente: correoCliente,
        cantidadPersonas: cantidadPersonas,
        fechaReserva: fechaReserva
      });
  } catch (error) {
    console.log("Error registrando reserva ", error);
  }
}



export { leerReservas, guardarReserva, COLECCION }