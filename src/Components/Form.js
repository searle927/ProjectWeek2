import React from 'react'

function Form() {
    return (
        <form className="search-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Search Food" onChange={onChange} value={query}/>
      <input type="submit" value="search" />
      </form>
            
    )
}

export default Form
