import { Route, Routes, useNavigate, navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CocktailList from './pages/CocktailList/CocktailList';
import CocktailDetail from './pages/CocktailDetail/CocktailDetail';
import Search from './components/Search/Search';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [search,setSearch] = useState({})
  const [searchResults, setSearchResults] = useState({})

  const handleSetSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value})
  }

  const handleSubmitSearch = evt => {
    setSearchResults({
      //where will make the API call
    })
    
  }

  return (
    <>
    <NavBar/>
    <Search search={search} handleSubmitSearch={handleSubmitSearch} handleSetSearch={handleSetSearch}/>
      <Routes>
        
        <Route path='/cocktails' element={<CocktailList />} />
        <Route path='cocktail' element={<CocktailDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
