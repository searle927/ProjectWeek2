import React from 'react'

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredients => {
        console.log(ingredients)
        return (
           <div>
               <ul> 
                    <li className="Ingredients">{ingredients.text}</li>
               </ul>
            </div>
        );
    });
      
};

export default RecipeDetails;
