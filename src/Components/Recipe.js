import React from 'react';
import RecipeDetails from './RecipeDetails';
import FavButton from './FavButton';

const Recipe = ({recipe}) => {
  const{label, image, url, ingredients} = recipe.recipe;
  return(
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="">
        Learn More on Website!
      </a>
      <FavButton />
      <RecipeDetails ingredients={ingredients}/>
      {/* <button>Favorite This Recipe</button> */}
    </div>
  );
};

// const Recipe = ({title, calories, image, ingredients}) => {
//   return(
//     <div>
//       <h1>{title}</h1>
//       <p>{calories}</p>
//       <img src={image} alt=""/>
//       <ul>
//         {ingredients.map(ingredient =>(
//           <li>{ingredient.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default Recipe;

