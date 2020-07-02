import React from 'react'

export const Rating = ({ children, type, onClick }) => {

    return (
        <button onClick={onClick}  type={type}>
            {children}
            Save Recipe!
        </button>
    );
};

export default Rating;