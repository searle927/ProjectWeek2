# Shaina's Recipe Project Overview 

## Project Links

- [Project-2 Repo Link](https://github.com/searle927/Project-2)
- [add your deployment link]()

## Project Description

For this project, I am looking to make a recipe application. I will use React’s Link and Source to allow people to see what type of meal they may want to make. The application will have a search bar with a button to look up whatever recipe they may be interested in and they will be able to save their favorite recipes as well. The application will have about five components including RecipeDetails, Recipes, a NavBar, a MainPage and an App.js.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

My API will allow people to search whatever types of food they are interested in making. Once they search the food, a recipe will show up, allowing them to cook just like the professionals.

API Key: 1da4a2bb0e8b8d3f0295172c2ca9360a

API ID: b4d5b79d

```
{exapmle: https://api.edamam.com/search?q=chicken%20AND%20barbecued&app_id=b4d5b79d&app_key=1da4a2bb0e8b8d3f0295172c2ca9360a&from=0&to=2 }

{
"q": "chicken AND barbecued",
"from": 0,
"to": 2,
"more": true,
"count": 2420,
"hits": [
{
"recipe": {
"uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0af010561422de733f0e3eca077f4c46",
"label": "Chicken Barbecue Marinade",
"image": "https://www.edamam.com/web-img/f4f/f4fd6b43073dfb079e951dccb38d3473.jpg",
"source": "Cookstr",
"url": "http://www.cookstr.com/recipes/chicken-barbecue-marinade",
"shareAs": "http://www.edamam.com/recipe/chicken-barbecue-marinade-0af010561422de733f0e3eca077f4c46/chicken+and+barbecued",
"yield": 2,
"dietLabels": [],
"healthLabels": [
"Vegan",
"Vegetarian",
"Peanut-Free",
"Tree-Nut-Free"
],
"cautions": [],
"ingredientLines": [
"½ cup soy sauce",
"1½ tablespoons brown sugar",
"1 tablespoon mirin (Japanese sweet rice wine)",
"1 tablespoon olive oil",
"1 teaspoon minced fresh garlic",
"1 teaspoon peeled and minced fresh ginger"
],
"ingredients": [],
"calories": 263.84024999879705,
"totalWeight": 173.9437499995242,
"totalTime": 15,
"totalNutrients": {},
"totalDaily": {},
"digest": []
},
"bookmarked": false,
"bought": false
},
{
"recipe": {},
"bookmarked": false,
"bought": false
}
]
}


```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Shaina's Wireframes](https://i.imgur.com/L0FYhUM.jpg)
- [Shaina's React Architecture](https://i.imgur.com/j6rwjgN.jpg)


### MVP/PostMVP - 5min

- Fully functioning Page
- NavBar with links that will go to other pages
- Proper Search Bar
- API that properly pulls the correct data
- Clean page that shows pictures of food and their recipes
- Ability to favorite a recipe


#### PostMVP 
- Working Carousel
- TBD

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App |   | 
| NavBar |   | 
| MainPage |    | 
| Recipes |    | 
| RecipeDetails |    | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| NavBar | H | 1 hr |  |   |
| Create React App file and Components | H | 1.5hrs|   |   |
| Search Bar & Button | H | 1.5hrs|  |   |
| Link Pages | H | 1.5hrs|  |   |
| Allowing top 5-8 recipes to show | M | 3hrs|  |   |
| Create my favorites page | H | 5hrs|  |   |
| CSS Styling | H | 8hrs|  |   |
| Figure out how to call an error when there's no recipes from the search| M | 5hrs|  |   |
| Figuring what the API should call | H | 4hrs|  |   |
| Home Page Display | H | 1hrs|  |   |
| Recipes Display | H | 2hrs|  |   |
| FavRecipes Display | H | 2hrs|  |   |
| Media Queries | H | 1.5hrs|  |   |
| Total | H | 37hrs | - | - |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
