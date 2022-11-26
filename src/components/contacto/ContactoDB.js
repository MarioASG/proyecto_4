import { getDocs, addDoc, collection, where, query } from "firebase/firestore";
import { db } from "../../database/firebase";

const COLECCION = "Contacto";

const leerMensajes = async (coleccion, correoCliente, nombreCliente) => {
  const restricciones = [ where( 'correoCliente', '==', correoCliente ), where( 'nombreCliente', '==', nombreCliente ) ];
  const mensajesCollectionRef = collection(db, "Contacto");
  const q = query( mensajesCollectionRef, ...restricciones )
  const querySnapshot = await getDocs(q);
  const mensajes = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return mensajes
}

const guardarMensaje = async (coleccion, nombreCliente, correoCliente, mensaje) => {
 if (nombreCliente.length > 0 && correoCliente.length > 0 && mensaje.length > 0 ) {
    

    try {
      const mensajes = await leerMensajes(coleccion, nombreCliente, correoCliente, mensaje )
      if (mensajes.length > 0) {
        alert('Este correo ya registra un mensaje con este nombre')
        return        
      }
      await  addDoc(collection(db, coleccion),
        {
          nombreCliente: nombreCliente.toUpperCase(),
          correoCliente: correoCliente.toLowerCase(),
          mensaje: mensaje 
        });
        alert('Mensaje enviado. Nos comunicaremos contigo')
    } catch (error) {
      console.log("Error enviando mensaje", error);
    }
    
  } else {
    alert('Complete todos los campos')
    
  }

}


export { leerMensajes, guardarMensaje, COLECCION }