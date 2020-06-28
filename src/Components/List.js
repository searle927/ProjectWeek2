import React from 'react';
import Recipes from './Recipes';
import Search from './SearchBar';
import SearchBar from './SearchBar';


function List() {
  return( 
    <>  
    <h1>List</h1>
    <SearchBar />
    <Recipes />
    </>
  )
}


export default List;