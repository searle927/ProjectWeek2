import React, {Link, useState} from 'react'; 
import './App.css';
import Axios from 'axios';
import Recipe from './Components/Recipe';
import NavBar from './Components/NavBar';


const App = () => {

  const [query, setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);

  const APP_ID="b4d5b79d";
  const APP_KEY="1da4a2bb0e8b8d3f0295172c2ca9360a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  

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
     <h1>Search For Your Favorite Recipe!</h1>
      <form className="search-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Search Food" onChange={onChange} value={query}/>
      <input type="submit" value="search" />
      </form>
      <section>
      <div className="recipes">
        {recipes!== []&& recipes.map(recipe =>
         <Recipe recipe={recipe}/>)}
        </div> 
        </section>
    </div>
  );
};

// const App = () => {


//  const [recipe, setRecipe] = useState([]);
//  const[search, setSearch] = useState('');
 

//   useEffect( () => {
//     getRecipe();
//   }, []);
  
// const getRecipe = async () => {
//   const response = await fetch(`https://api.edamam.com/search?q=dinner&app_id=b4d5b79d&app_key=1da4a2bb0e8b8d3f0295172c2ca9360a`);
//   const data = await response.json();
//   setRecipe(data.hits);
//   console.log(data.hits);
// };

// const updateSearch = e => {
//   setSearch(e.target.value);
//   console.log(search);
// };

// const getSearch = e => {
//   e.preventDefault();
//   setSearch('');
// }

//   return ( 
//     <div className="App">
//       <form onSubmit={getSearch} className="search-form">
//         <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
//         <button className="search-button" type="submit">Search</button>
//       </form>
//       {recipe.map(recipe =>(
//         <Recipe 
//         key={recipe.recipe.label} 
//         title={recipe.recipe.label} 
//         calories={recipe.recipe.calories}
//         image={recipe.recipe.image}
//         ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//     </div>
//   )

// }

//DO NOT USE !!!!!!!!!!!!!
  // state ={
  //   recipes: [],
  //   url: 'https://api.edamam.com/search?q=dinner&app_id=b4d5b79d&app_key=1da4a2bb0e8b8d3f0295172c2ca9360a'
  // };

  // async getRecipes(){
  //   const data = await fetch(this.state.url);
  //   const jsonData = await data.json();
  //   this.setState({
  //     recipes:jsonData.recipes
  //   })
  // }

  // return( 
  //   <>
  //   <List />
  //   <RecipeDetails />
  //   </>
  // )



export default App;
