import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch
  } from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { DashBoardRouters } from "./DashBoardRouters";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";
import { useDispatch } from "react-redux"
import { getAuth, onAuthStateChanged} from "@firebase/auth"
import { loginEmailPassword } from "../actions/actionLogin"

export default function AppRouter() {

const dispatch = useDispatch();

const [checking, setChecking]= useState(true);
const [isLoggedIn, setIsLoggedIn]= useState(false);

useEffect(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
          dispatch(loginEmailPassword(user.uid, user.displayName))
          setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
  })
}, [dispatch, setChecking, setIsLoggedIn])


if (checking){
  return(
    <h1>Espere....</h1>
  )
}


  return (
    <Router>
        <Switch>
          <PublicRouter 
          exact 
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}/>


          <PublicRouter 
          exact
          path="/registro"
          component={Registro}
          isAuthenticated={isLoggedIn}/>

          <PrivateRoute 
                path="/"
          component={DashBoardRouters}
          isAuthenticated={isLoggedIn}/>

        </Switch>
    </Router>
  );
}