import { typesEstudiante } from "../types/types";
import {addDoc, collection, getDocs, query, where, deleteDoc, doc} from 'firebase/firestore'
import {db} from '../firebase/firebaseConfig'


export const eliminarAsincrono = (email)=> {
  return async (dispatch)=>{
      const coleccion= collection(db, 'estudianteCollection')
      // el 1er email es el firebase el 2do la operacion de comparacion y el 3ro la entrada que recibo
      const q = query(coleccion, where('email', '==', email))
      const resultado = await getDocs(q)
       resultado.forEach((elemento)=>{
         deleteDoc(doc(db, 'estudianteCollection', elemento.id))
       })
       dispatch(eliminarSincrono(email))
     
  }
}


export const  eliminarSincrono =(email)=>{
    return{
      type: typesEstudiante.eliminar,
      payload:email
    }
}


export const ListarAsincronico = ()=>{
    return async ( dispatch) =>{
        const datos = await getDocs(collection(db, 'estudianteCollection'))
         const estude=[];
         datos.forEach((documento)=>{
           estude.push({...documento.data()     
               
           })
         })
         dispatch(ListarSincrono(estude))
         
      }
}


export const ListarSincrono =(estudiante)=>{
  return{
    type: typesEstudiante.listar,
    payload: estudiante
  }

}
export const EstuAsincronico = (doc, nom, ape, tlf, direc, cel, email, img) => {
  
    return (dispatch) =>
  {
    const estudiante = {
      doc,
      nom,
      ape,
      tlf,
      direc,
      cel,
      email,
      img,
    };

    addDoc(collection( db, 'estudianteCollection'), estudiante )
        .then(resp =>{
            dispatch(AgregarEstudiante(estudiante))
        })
        .catch(error => {
            console.log(error);
        })
}
};

export const AgregarEstudiante = (estudiante) => {
  return {
    type: typesEstudiante.registro,
    payload: estudiante,
  };
};
