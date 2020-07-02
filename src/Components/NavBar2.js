import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

export default function App(){
    return (
        <Router>
            <div className="Nav">
            <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/desserts">Desserts</NavLink>
            </li>
        </ul>
        </nav>

        <Switch>
        <Route path="/favorites">
            <Desserts />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>
        </div>
        </Router>
    );
}

function Home() {
    return <h2></h2>;
}
function Desserts() {
    return <h2></h2>;
}
