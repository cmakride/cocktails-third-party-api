import { Route, Routes } from 'react-router-dom';
import CocktailList from './pages/CocktailList/CocktailList';
import CocktailDetail from './pages/CocktailDetail/CocktailDetail';
import Search from './components/Search/Search';

function App() {
  return (
    <>
    <a href='/cocktails'>All Cocktails</a>
    <a href='/'>Search</a>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/cocktails' element={<CocktailList />} />
        <Route path='cocktail' element={<CocktailDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
