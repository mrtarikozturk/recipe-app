import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Modal from './components/Modal/Modal';
import './App.css';

const App = () => {

  // Constants
  const APP_ID = '6cc9781f';
  const API_KEY = '7fe33b206ea1c37abb56ae1092bc83ea';

  //states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [show, setShow] = useState(false);

  //useEffects
  useEffect(() => getRecipes(), [query]);

  //Fetch Data
  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  }

  const getSearch = (event) => {
    event.preventDefault();

    if (!search) {
      alert('Enter a word');
      return;
    }
    setQuery(search);
    setSearch('');
  }

  const updateInputText = (event) => {
    setSearch(event.target.value);
  }

  const close = () => setShow(false);
  const open = () => setShow(true);


  return (
    <div className="App">
     
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' onChange={updateInputText} value={search} placeholder='Search...' />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {
          recipes.map((item, index) => (
            <Recipe key={index} data={item.recipe} />
          ))
        }
      </div>
      <Modal isVisible={show} close={close} />
      <button onClick={open}>Close</button>
    </div>
  );
}

export default App;
