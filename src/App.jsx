import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CocktailList from './pages/CocktailList/CocktailList';
import CocktailDetail from './pages/CocktailDetail/CocktailDetail';
import Search from './components/Search/Search';
import NavBar from './components/NavBar/NavBar';
import SearchResults from './components/Search/SearchResults';
import { searchCocktails, searchOneLetter } from './services/api-calls'


function App() {
  const navigate = useNavigate()
  const [search, setSearch] = useState({})
  const [searchResults, setSearchResults] = useState({})

  const handleSetSearch = evt => {
    setSearch({ ...search, [evt.target.name]: evt.target.value })
  }

  const handleSubmitSearch = evt => {
    let tempQuery = search.query
    console.log("TEMPQUERY", tempQuery)

    if (tempQuery) {
      console.log("EXISTS")
      if (tempQuery?.length === 1) {
        searchOneLetter(tempQuery)
          .then(cocktails => setSearchResults(cocktails))
        console.log(searchResults)
        navigate('/')
      }

      else {
        searchCocktails(tempQuery)
          .then(cocktails => setSearchResults(cocktails))
        console.log(searchResults)
        navigate('/')
      }
    } else {

    }


  }

  return (
    <>
      <NavBar />
      <Search search={search} handleSubmitSearch={handleSubmitSearch} handleSetSearch={handleSetSearch} />
      <Routes>
        <Route path='/' element={<SearchResults cocktails={searchResults} searchString={search} />} />
        <Route path='/cocktails' element={<CocktailList />} />
        <Route path='cocktail' element={<CocktailDetail />} />
      </Routes>
    </>
  );
}

export default App;
