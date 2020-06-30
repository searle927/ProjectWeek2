import React from 'react'

export const FavButton = ({ children, type, onClick }) => {

    return (
        <button onClick={onClick}  type={type}>
            {children}
            Click Here
        </button>
    );
};

export default FavButton;
