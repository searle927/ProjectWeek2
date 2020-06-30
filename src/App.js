import React, {useEffect, useState} from 'react'; 
import './App.css';
import Recipe from './Components/Recipe';

const App = () => {
  const APP_ID="b4d5b79d";
  const APP_KEY="1da4a2bb0e8b8d3f0295172c2ca9360a";
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  
  return(
    <h1>Search For Your Favorite Recipe!</h1>
  )
}

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
