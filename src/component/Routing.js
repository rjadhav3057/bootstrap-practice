
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Employee from "./Employee";
import Department from "./Department";
import Leave from "./Leave";

export default function Routing() {
    return (
        <div>  
        <Switch >
          <Route path='/employee' component={Employee} />
          <Route path='/department' component={Department} />
          <Route path='/leave' component={Leave} />
        </Switch>
        </div>
    )
}
