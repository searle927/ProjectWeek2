import React from 'react';
import RecipeDetails from './RecipeDetails';
import Ratings from './Ratings';



const Recipe = ({recipe}) => {
  const{label, image, url, ingredients} = recipe.recipe;
  return(
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} /><br />
      <a href={url} target="_blank" rel="">
        Learn More on Website!
      </a>
      <RecipeDetails ingredients={ingredients}/>
      <h4>Rate Recipe!</h4>
      <Ratings />
    </div>
  );
};


export default Recipe;

