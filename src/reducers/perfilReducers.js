import { typesPerfil } from "../types/types";

const initialState = {
  perfil: [],
};
export const perfilReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesPerfil.registro:
      return {
        perfil: [action.payload],
      };
      
    case typesPerfil.listar:
     return{
         perfil:[...action.payload]
     }
     case typesPerfil.eliminar:
         return{
             perfil: state.perfil.filter(perf => perf.email !== action.payload)
         }

    default:
   return state;
  }
};
