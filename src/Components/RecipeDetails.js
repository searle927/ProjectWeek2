import React from 'react'

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredients => {
        console.log(ingredients)
        return (

           <div>
               <ul>{ingredients.text}</ul>
            </div>
           

        );
    });
      
};

export default RecipeDetails;
