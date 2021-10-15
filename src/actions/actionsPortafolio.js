import { typesPortafolio } from "../types/types";
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



//Eliminar///////////////////////////////////////////////////////////////////////
export const eliminarAsincrono = (email) => {
  return async (dispatch) => {
    const coleccion = collection(db, "portafolioCollection");
    const q = query(coleccion, where("emailProf", "==", email));
    const resultado = await getDocs(q);
    resultado.forEach((elemento) => {
      deleteDoc(doc(db, "portafolioCollection", elemento.id));
    });
    dispatch(eliminarSincrono(email));
  };
};

export const eliminarSincrono = (email) => {
  return {
    type: typesPortafolio.eliminar,
    payload: email,
  };
};




//Listar//////////////////////////////////////////////////////////////////////
export const ListarAsincronico = () => {
  return async (dispatch) => {
    const datos = await getDocs(collection(db, "portafolioCollection"));
    const estude = [];
    datos.forEach((documento) => {
      estude.push({ ...documento.data() });
    });
    dispatch(ListarSincrono(estude));
  };
};

export const ListarSincrono = (portafolio) => {
  return {
    type: typesPortafolio.listar,
    payload: portafolio,
  };
};



//Portafolio Agregar///////////////////////////////////////////////////////////////////

export const PortaAsincronico = (
  nomProf,
  emailProf,
  descripServ,
  nomTec,
  precio,
  imagen
) => {
  return (dispatch) => {
    const portafolio = {
      nomProf,
      emailProf,
      descripServ,
      nomTec,
      precio,
      imagen,
    };

    addDoc(collection(db, "portafolioCollection"), portafolio)
      .then((resp) => {
        dispatch(AgregarPortafolio(portafolio));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const AgregarPortafolio = (portafolio) => {
  return {
    type: typesPortafolio.registro,
    payload: portafolio,
  };
};
