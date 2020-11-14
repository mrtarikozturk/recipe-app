import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ data }) => {
    return (
        <div className={style.recipe}>
            <h1>{data.label}</h1>
            <ol>
                {
                    data.ingredients.map((item, index) => (
                        <li>{item.text}</li>
                    ))
                }
            </ol>
            <p>{data.calories}</p>
            <img className={style.image} src={data.image} alt='' />
        </div>
    );
}

export default Recipe;
