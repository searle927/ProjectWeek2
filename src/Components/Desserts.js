import React from 'react'
import {Route} from 'react-router-dom';


function Desserts() {
    return (
        <div>
          <h1>Choose From Our 6 Favorite Desserts!</h1>
          <a href='https://api.edamam.com/recipe/serious-chocolate-easy-chocolate-pie-crust-recipe-3dc6d568c66a38e2f86d24a055c6de6d/chocolate'>
            <img border='0' alt='Chocolate Cake' src='https://www.edamam.com/web-img/4d9/4d92006b030763f551ce22e97d074555.jpg'></img>
          </a>
          
          {/* <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img> */}
        </div>
    )
}

export default Desserts;
