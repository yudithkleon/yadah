import { types } from "../types/types";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import {
  addDoc,
  collection,
  getDocs  
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


export const registerEmailPasswordNombre=(email, password, name)=>{
    return (dispatch)=>{
        const auth=getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then (async({user})=>{
                await updateProfile(auth.currentUser, {displayName: name})
                dispatch(registerSincronico(user.email, user.uid, user.displayName))
                console.log(user)
        })
        .catch(e=>{
            console.log(e);
        })
    }
}

export const registerAsincronico = (email, password, password2, name, ape, tipoU, foto) => {
        return (dispatch)=>
        {
            const register={
                email,
                password,
                password2,
                name, 
                ape, 
                tipoU,
                foto,
            }
            addDoc(collection(db, "usuarioCollection"), register)
            .then((resp) => {
              dispatch(registerSincronico(register));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      
}

  
  export const registerSincronico = (register) => {
    return {
        type: types.register,
        payload: register
         };
  };



