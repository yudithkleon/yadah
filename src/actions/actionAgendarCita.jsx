import { typesAgendar } from "../types/types";
import {
    addDoc,
    collection,
    getDocs,
    query,
    where,
    deleteDoc,
    doc,
    setDoc,
  } from "firebase/firestore";
  import { db } from "../firebase/firebaseConfig";


//elimar o cancelar cita
  export const eliminarAsincrono = (email) => {
    return async (dispatch) => {
      const coleccion = collection(db, "agendarCollection");
      const q = query(coleccion, where("email", "==", email));
      const resultado = await getDocs(q);
      resultado.forEach((elemento) => {
        deleteDoc(doc(db, "agendarCollection", elemento.id));
      });
      dispatch(eliminarSincrono(email));
    };
  };
  
  export const eliminarSincrono = (email) => {
    return {
      type: typesAgendar.eliminar,
      payload: email,
    };
  };

//listar las citas

  export const ListarAsincronico = () => {
    return async (dispatch) => {
      const datos = await getDocs(collection(db, "agendarCollection"));
      const agenda = [];
      datos.forEach((documento) => {
       agenda.push({ ...documento.data() });
      });
      dispatch(ListarSincrono(agenda));
    };
  };
  
  export const ListarSincrono = (cita) => {
    return {
      type: typesAgendar.listar,
      payload: cita,
    };
  };
  
// Agregar la cita a  Firebase

export const AgendarAsincronico=(values)=>{
return async (dispatch)=>{

     await addDoc(collection(db, "agendarCollection"), values)
      .then((resp) => {
        dispatch(AgendarSincronico(resp));
        console.log(resp)
      })
      .catch((error) => {
        console.log(error);
      });
}
}

  export const AgendarSincronico = (cita)=>{
      return{
          type: typesAgendar.registro,
          payload: cita,
      }
  }  

