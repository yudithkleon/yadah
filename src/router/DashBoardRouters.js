
import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AgendarCita } from '../components/AgendarCita';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Portafolio } from '../components/Portafolio';
import Principal from '../components/Principal';
import {Registro} from '../components/Registro';

export const DashBoardRouters = () => {
    return (
        <>
        <NavBar/>
        <div>
            <Switch>
                <Route exact path="/portafolio" component={Portafolio}/>
                <Route exact path="/principal" component={Principal}/>
                <Route path="/agendar" component={AgendarCita}/>
                <Redirect  to="/principal" />
   
            </Switch>
        </div>
        <Footer/>
        </>
    )
}
