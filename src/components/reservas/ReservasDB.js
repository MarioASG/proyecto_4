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
  if (nombreCliente.length > 0 && correoCliente.length > 0 && cantidadPersonas.length > 0 && fechaReserva.length > 0 ) {
    leerReservas();
    console.log(leerReservas());

    try {
      await addDoc(collection(db, coleccion),
        {
          nombreCliente: nombreCliente.toUpperCase(),
          correoCliente: correoCliente.toLowerCase(),
          cantidadPersonas: cantidadPersonas,
          fechaReserva: fechaReserva
        }).then(alert('Reserva lograda! Nos vemos (:'));
    } catch (error) {
      console.log("Error registrando reserva ", error);
    }
    
  } else {
    alert('Complete todos los campos')
    
  }

}



export { leerReservas, guardarReserva, COLECCION }