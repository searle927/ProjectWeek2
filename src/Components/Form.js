import React, {} from 'react'


function Form() {
    return (
      <div className="form">
      <form onSubmit={handleSubmit} />
      <input type='text' placeholder='Search Food' onChange={handleChange} value={input} />
      <input type='submit'/> 
      </div>     
    );
};

export default Form;
