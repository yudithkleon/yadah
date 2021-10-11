import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import {portafolioReducers} from "../reducers/portafolioReducers";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers ( {
  login: loginReducer,
  register: registerReducer,
  portafolio: portafolioReducers

})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);


