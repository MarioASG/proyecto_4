import { getDocs, addDoc, collection, query, where } from "firebase/firestore";
import { db } from "../../database/firebase";

const COLECCION = "Reservas";

const leerReservas = async (coleccion, correoCliente,  fechaReserva) => {
  const restricciones = [ where( 'correoCliente', '==', correoCliente ), where( 'fechaReserva', '==', fechaReserva ) ];
  const reservasCollectionRef = collection(db, "Reservas");
  const q = query( reservasCollectionRef, ...restricciones )
  const querySnapshot = await getDocs(q);
  const reservas = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return reservas

}

const guardarReserva = async (coleccion, nombreCliente, correoCliente, cantidadPersonas, fechaReserva ) => {
  if (nombreCliente.length > 0 && correoCliente.length > 0 && fechaReserva.length > 0 ) {
    

    try {
      const reservas = await leerReservas(coleccion, correoCliente,  fechaReserva)
      if (reservas.length > 0) {
        alert('Este correo ya registra una reserva en esta fecha')
        return        
      }
      await  addDoc(collection(db, coleccion),
        {
          nombreCliente: nombreCliente.toUpperCase(),
          correoCliente: correoCliente.toLowerCase(),
          cantidadPersonas: cantidadPersonas,
          fechaReserva: fechaReserva
        });
        alert('Reserva lograda! Nos vemos (:')
    } catch (error) {
      console.log("Error registrando reserva ", error);
    }
    
  } else {
    alert('Complete todos los campos')
    
  }

}



export { leerReservas, guardarReserva, COLECCION }