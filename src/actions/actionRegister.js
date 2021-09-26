import { types } from "../types/types";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";


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

export const registerSincronico = (email, password, name) => {
        return{
            type:types.register,
            payload:{
                email,
                password,
                name
            }
        }
}