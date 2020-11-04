import React from 'react'
import routeList from './routeList'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
const AppRouter=()=> {
    return (
        <Router>
            <Switch>
                {
                    routeList.map(route=>(
                        <Route exact={route.exact} path={route.path}>
                            <route.component/>
                        </Route>
                    ))
                }
            </Switch>
        </Router>
    )
}
export default AppRouter
