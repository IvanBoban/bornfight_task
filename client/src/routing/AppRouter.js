import React from 'react'
import routeList from './routeList'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
const AppRouter=()=> {
    return (
        <Router>
            <Switch>
                {
                    routeList.map(route=>(
                        <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>
                    ))
                }
            </Switch>
        </Router>
    )
}
export default AppRouter
