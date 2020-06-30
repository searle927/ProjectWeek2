import React from 'react';
import { Link } from "react-router";
// import App from '../App';


export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/favorites">
            <About />
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
  return <h2>Home</h2>;
}

function About() {
  return <h2>Favorites</h2>;
}

  
    {/* <h3>Lets Get <span>Cooking</span>!</h3>
     <nav className="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Favorites</a></li>
      </ul>
     </nav> */}


