
import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { Portafolio } from '../components/Portafolio';

export const DashBoardRouters = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/portafolio" component={Portafolio}/>
                <Redirect  to="/portafolio" />
   
            </Switch>
        </div>
    )
}
