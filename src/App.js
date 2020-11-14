import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  // Constants
  const APP_ID = '6cc9781f';
  const API_KEY = '7fe33b206ea1c37abb56ae1092bc83ea';

  //states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  //useEffects
  useEffect(() => getRecipes(), [query]);

  //Fetch Data
  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const getSearch = (event) => {
    setQuery(search);
    setSearch('');
    event.preventDefault();
  }

  const updateInputText = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' onChange={updateInputText} value={search} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {
          recipes.map((item, index) => (
            <Recipe key={index} data={item.recipe} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
