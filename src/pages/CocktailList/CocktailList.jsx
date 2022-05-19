import { useState, useEffect } from "react";
import { getCocktails } from "../../services/api-calls";
import CocktailCard from "../../components/CocktailCard/CocktailCard";



const CocktailList = (props) => {
  const [cocktails, setcocktails] = useState([])

  const cocktailArray = cocktails.drinks

  useEffect(() => {
    getCocktails()
      .then(cocktailsData => setcocktails(cocktailsData))
  }, [])

  console.log(cocktailArray)


  return (
    cocktailArray ?
    <>
    
      <h1 className="my-8 text-back text-center text-3xl font-bold p-4">All Cocktails</h1>
      <div className="grid grid-cols-1 gap-4 mx-5 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {cocktailArray.map((cocktail, idx) => (

          <div className="h-96 w-96 max-w-xs border-2 border-gray-200 border-opacity-600 rounded-lg overflow-hidden bg-gradient-to-r from-light-100 to-dark-100" key={idx}>

            <CocktailCard cocktail={cocktail}
            />

          </div>
        ))}
      </div>
    </>
    :
    <>
    <h4>Loading Cocktails</h4>
    </>
  );
}

export default CocktailList;