import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  // Constants
  const APP_ID = 'Write_Your_Api_Id';
  const API_KEY = 'Write_Your_Api_Key';

  //states
  const [recipes, setRecipes] = useState([]);

  //useEffects
  useEffect(() => getRecipes(), []);

  //Fetch Data
  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>Search</button>
      </form>
      {
        recipes.map((item, index) => (
          <Recipe key={index} data={item.recipe} />
        ))
      }
    </div>
  );
}

export default App;
