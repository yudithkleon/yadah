import React from 'react'
import { typesPerfil } from '../types/types'
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


export const eliminarPerfilAsincronico=(email)=>{
    return async (dispatch)=>{
        const coleccion= collection(db, 'pefilCollection')
        const q = query(coleccion, where("email", "==", email));
        const resultado = await getDocs(q);
        resultado.forEach((elemento) => {
          deleteDoc(doc(db, 'pefilCollection', elemento.id));
    })
    dispatch(eliminarPerfilSincrono(email))
}
}


  export const eliminarPerfilSincrono=(email)=>{
      return{
          type: typesPerfil.eliminar,
          payload: email,
      }
  }



export const ListarAsincronico =()=>{
    return async (dispatch)=>{
        const datos=await getDocs(collection(db, 'pefilCollection' ));
        const perf = [];
        datos.forEach((documento)=>{
            perf.push({...documento.data})
        })
        dispatch(ListarSincrono(perf))
    }
}

export const ListarSincrono=(perfil)=>{
    return{
        type: typesPerfil.listar,
        payload: perfil,
    }
}


export const crearPerfilAsincronico = (
    nombre,
    apellido,
    sexo,
    tipoU,
    tlf,
    email,
    direc,
    foto,
    profesion,
    trabajos,
    sitio,
    descanso,
    horarios,
)  =>{
    return(dispatch)=>{
        const perfil={
            nombre,
            apellido,
            sexo,
            tipoU,
            tlf,
            email,
            direc,
            foto,
            profesion,
            trabajos,
            sitio,
            descanso,
            horarios,
        }
        addDoc(collection(db, 'pefilCollection'), perfil)
            .then((resp)=>{
                dispatch(CrearPerfilSincronico(perfil))
            })
            .catch((error)=>{
                console.log(error)
            })
    }
}

export const CrearPerfilSincronico = (perfil)=>{
    return {
        type: typesPerfil.registro,
        payloas: perfil,
    }
}
