import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../../database/firebase";

const COLECCION = "Contacto";

const leerMensajes = async (coleccion) => {
  try {
    const reservas = await getDocs(collection(db, coleccion));
    let arrMensajes = reservas.docs.map(doc => (doc.data()));
    
    return arrMensajes;
  } catch (error) {
    console.log("Error leyendo los datos: ", error);
  }
}

const guardarMensaje = async (coleccion, nombreCliente, correoCliente, mensaje) => {
  try {
    await addDoc(collection(db, coleccion),
      {
        nombreCliente: nombreCliente,
        correoCliente: correoCliente,
        mensaje: mensaje
      });
  } catch (error) {
    console.log("Error registrando reserva ", error);
  }
}



export { leerMensajes, guardarMensaje, COLECCION }