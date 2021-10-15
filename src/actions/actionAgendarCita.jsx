import { typesAgendar } from "../types/types";
import {
    addDoc,
    collection,
    getDocs,
    query,
    where,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { db } from "../firebase/firebaseConfig";

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
  
  export const ListarSincrono = (agendarcita) => {
    return {
      type: typesAgendar.listar,
      payload: agendarcita,
    };
  };
  

export const AgendarAsincronico=(
    lugar,
    direc, 
    servicio,
    observacion,
    cliente,
    email,
    fecha,
    hora,
    profesional
)=>{
return (dispatch)=>{
    const agendarcita={
        lugar,
    direc, 
    servicio,
    observacion,
    cliente,
    email,
    fecha,
    hora,
    profesional
    };
    addDoc(collection(db, "agendarCollection"), agendarcita)
      .then((resp) => {
        dispatch(AgendarSincronico(agendarcita));
      })
      .catch((error) => {
        console.log(error);
      });
}
}


  export const AgendarSincronico = (agendarcita)=>{
      return{
          type: typesAgendar.registro,
          payload: agendarcita,
      }
  }  