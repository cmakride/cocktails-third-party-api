import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const CocktailDetail = () => {
  const [cocktailDetails, setCocktailDetails] = useState({})

  let location = useLocation()

  // ! getting the ID from location state passed down from cocktailCard

  const cocktailID = location.state.drinkId

  const details = cocktailDetails
  

  console.log(details)



  useEffect(() => {
    getDetails(cocktailID)
      .then(cocktailDetails => setCocktailDetails(cocktailDetails.drinks[0]))
  }, [cocktailID])

  return (
    details ?
      <>
        <div className='py-8 w-full flex justify-center items-center'>
          <div className="bg-white rounded w-11/12 shadow hover:shadow-md duration-4 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between uppercase font-bold border-b p-6">
              <p>{details.strDrink}</p>
            </div>

            <div className="p-6 flex flex-col items-center gap-1 mb-3">
              <img className="w-96 flex self-center rounded shadow-lg mb-6" src={details.strDrinkThumb} alt="Cocktail" />
              <div className='flex gap-3 items-center'>
               
                
              </div>
              <h2>Method: {details.strInstructions}</h2>
              <h2>Served in: {details.strGlass}</h2>
              <h2>Ingredients:</h2>
              {/* {currentCocktail.ingredients.map((ingredient, idx) => (
                <div key={idx} >
                  {ingredient}
                </div>

              ))} */}


            </div>
          </div>
        </div>
      </>
      :
      <>
        <h2>Loading Details</h2>
      </>
  );
}

export default CocktailDetail;