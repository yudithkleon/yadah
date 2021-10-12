
import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AgendarCita } from '../components/AgendarCita';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import Perfil from '../components/Perfil';
import { Portafolio } from '../components/Portafolio';
import Principal from '../components/Principal';
import {Registro} from '../components/Registro';
import Servicios from '../components/Servicios';



export const DashBoardRouters = () => {
    return (
        <>
        <NavBar/>
        <div>
            <Switch>
                <Route exact path="/portafolio" component={Portafolio}/>
                <Route exact path="/principal" component={Principal}/>
                <Route path="/agendar" component={AgendarCita}/>
                <Route path="/registro" component={Registro}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/servicios" component={Servicios}/>
                <Redirect  to="/principal" />
   
            </Switch>
        </div>
        <Footer/>
        </>
    )
}
