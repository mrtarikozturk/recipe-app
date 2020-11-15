import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ data }) => {
    return (
        <div className={style.recipe}>
            <h1>{data.label}</h1>
            <img className={style.image} src={data.image} alt='' />
            <p>Kalori : {Math.round(data.calories)}</p>
            <ol style={{ listStyle: "none", textAlign: 'center' }}>
                {
                    data.ingredients.map((item, index) => (
                        <li>{item.text}</li>
                    ))
                }
            </ol>
        </div>
    );
}

export default Recipe;
