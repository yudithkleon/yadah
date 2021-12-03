import { typesAgendar } from "../types/types";

const initialState={
    agendar:[]
}


export const agendarReducers = (state= initialState, action) => {
   switch (action.type) {
       case typesAgendar.registro:
           return{
               agendar:[action.payload]
           }
           
           case typesAgendar.listar:
               return{
                   agendar: [...action.payload]
               }

           case typesAgendar.eliminar:
               return{
                   agendar: state.agendar.filter(cita => cita.email !== action.payload)               }
   
       default:
         return state;
   }
}
