import React from 'react'

const Recipe = (props) => {
    return (
        <div>
            <h1>{props.data.label}</h1>
            <p>{props.data.calories}</p>
            <img src={props.data.image} alt='' />
        </div>
    );
}

export default Recipe
