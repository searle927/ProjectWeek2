import React, { useState } from 'react'; 
import './App.css';
import Axios from 'axios';
import Recipe from './Components/Recipe';
import NavBar from './Components/NavBar';
import Desserts from './Components/Desserts';
import {Route, Switch} from 'react-router-dom';

const App = () => {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID="b4d5b79d";
  const APP_KEY="1da4a2bb0e8b8d3f0295172c2ca9360a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  // used the axios approach, because when I read the article I liked it better. Used  'https://www.npmjs.com/package/axios' and 'https://stackoverflow.com/questions/46733354/use-async-await-with-axios-in-react-js' to help.
  const getData = async () => {
      const result = await Axios.get(url);
      setRecipes(result.data.hits)
      console.log(result);
      setQuery('');
    };


  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
     getData();
  };

  return(
    <div className="App">
      <NavBar />
      {/* <Route exact path="/desserts" component={Desserts} /> */}
     <h1>Search For Your Favorite Recipe!</h1>
      <form className="search-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Search Food" onChange={onChange} value={query}/>
      <input type="submit" value="search" />
      </form>
      <Switch>
          <Route exact path="/desserts" component={Desserts} />
         
      </Switch>
      <section>
      <div className="recipes">
        {recipes!== []&& recipes.map(recipe =>
         <Recipe recipe={recipe}/>)}
         {/* <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""></img> */}
        </div> 
        </section>
    </div>
  );
};

export default App;
