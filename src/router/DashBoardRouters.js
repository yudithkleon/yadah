
import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Estudiantes } from '../components/Estudiantes';

export const DashBoardRouters = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/estudiantes" component={Estudiantes} />
                <Redirect  to="/estudiantes" />

              
            </Switch>
        </div>
    )
}
