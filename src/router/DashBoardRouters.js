
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
import Servicios from '../components/Servicios';
import {Registro} from '../components/Registro'
import { ListarPortafolio } from '../components/ListarPortafolio';
import LisPortafolioCliente from '../components/LisPortafolioCliente';
import { Personal } from '../components/Personal';
// import { NavBar2 } from '../components/NavBar2';


export const DashBoardRouters = () => {
    return (
        <>
        <NavBar/>
        {/* <NavBar2/> */}
        <div>
            <Switch>
                <Route exact path="/portafolio" component={Portafolio}/>
                <Route exact path="/principal" component={Principal}/>
                <Route exact path="/agendar" component={AgendarCita}/>
                {/* <Route exact path="/registro" component={Registro}/> */}
                <Route exact  path="/perfil" component={Perfil}/>
                <Route exact path="/servicios" component={Servicios}/>
                <Route exact path="/personal" component={Personal}/>
               <Route exact path="/listarPortafolio" component={ListarPortafolio} />
                <Route exact path="/LisPortafolioCliente" component={LisPortafolioCliente}/>
                <Redirect  to="/principal" />
   
            </Switch>
        </div>
        <Footer/>
        </>
    )
}
