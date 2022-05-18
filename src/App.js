import { Route, Routes } from 'react-router-dom';
import CocktailList from './pages/CocktailList/CocktailList';

function App() {
  return (
    <>
    <a href='/cocktails'>To All Cocktails</a>
      <Routes>
        <Route path='/cocktails' element={<CocktailList />} />
      </Routes>
    </>
  );
}

export default App;
