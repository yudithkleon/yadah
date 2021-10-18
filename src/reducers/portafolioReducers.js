import { typesPortafolio } from "../types/types";

const initialState ={
    portafolio: [],

}

export const portafolioReducers = (state =initialState, action) =>{
    switch (action.type) {
        case typesPortafolio.registro: 
        return {
          
            portafolio: [action.payload, state.portafolio]
        }
         
        case typesPortafolio.listar:
            return{
                            portafolio:[...action.payload]
            }
      
            case typesPortafolio.eliminar:
                return{
                    portafolio:state.portafolio.filter(porta => porta.email !== action.payload)
                    
                }
           
        default:
           return state;
    }

}