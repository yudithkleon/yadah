import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { estudianteReducers } from "../reducers/estudianteReducers";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers ( {
  login: loginReducer,
  register: registerReducer,
  estudiante: estudianteReducers

})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);


