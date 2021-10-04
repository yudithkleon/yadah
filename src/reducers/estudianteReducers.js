import { typesEstudiante } from "../types/types";

const initialState ={
    estudiante: []
}

export const estudianteReducers = (state =initialState, action) =>{
    switch (action.type) {
        case typesEstudiante.registro: 
        return {
            estudiante: [action.payload]
        }
         
        case typesEstudiante.listar:
            return{
                estudiante:[...action.payload]
            }
        
            case typesEstudiante.eliminar:
                return{
                    estudiante:state.estudiante.filter(estud => estud.email !== action.payload)
                    
                }
        default:
           return state;
    }

}