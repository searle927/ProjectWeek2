import React from 'react'

export const FavButton = ({ children, type, onClick }) => {

    return (
        <button onClick={onClick}  type={type}>
            {children}
            Save Recipe!
        </button>
    );
};

export default FavButton;