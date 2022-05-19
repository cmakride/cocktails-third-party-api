import { Route, Routes } from 'react-router-dom';
import CocktailList from './pages/CocktailList/CocktailList';
import CocktailDetail from './pages/CocktailDetail/CocktailDetail';

function App() {
  return (
    <>
    <a href='/cocktails'>To All Cocktails</a>
      <Routes>
        <Route path='/cocktails' element={<CocktailList />} />
        <Route path='cocktail' element={<CocktailDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
