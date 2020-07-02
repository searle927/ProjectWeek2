import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Desserts from './Desserts';

export default function App() {
  return (
   
      <div className="Nav">
        <h3>Eat Good!</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/desserts">Desserts</Link>
            </li>
          </ul>
        </nav>
      </div>
    
  );
}
