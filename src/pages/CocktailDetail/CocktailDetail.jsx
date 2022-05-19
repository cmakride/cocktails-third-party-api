import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const CocktailDetail = () => {
  const [cocktailDetails, setCocktailDetails] = useState({})
  const [ingredientsArray, setIngredientsArray] = useState([])
  const [amountsArray, setAmountsArray] = useState([])


  let location = useLocation()
  // ! getting the ID from location state passed down from cocktailCard
  const cocktailID = location.state.drinkId

  const details = cocktailDetails

  useEffect(() => {
    getDetails(cocktailID)
      .then(cocktailDetails => {
        setCocktailDetails(cocktailDetails.drinks[0])
        const tempdetails = cocktailDetails
        const tempDet = tempdetails.drinks[0]
        
        const arrayDetails = Object.values(tempDet)
        console.log(arrayDetails)

        let tempArray = []
        let tempArray2 = []
        for (let i = 1; i < 16; i++) {
          if (arrayDetails[16+i] === null) {

          } else {

            tempArray.push(arrayDetails[16 + i])
          }
        }
        for (let i = 1; i < 16; i++) {
          if (arrayDetails[31+i] === null) {

          } else {
            tempArray2.push(arrayDetails[31 + i])
          }
        }
        console.log(tempArray)
        setIngredientsArray(tempArray)
        console.log(tempArray2)
        setAmountsArray(tempArray2)

      })
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
              {/* {ingredientsArray ?
                <>
                  {ingredientsArray.map((ingredientArray, idx) => (

                    true ?
                      <>
                        <div key={idx} >
                          {ingredientArray}
                        </div>
                      </>
                      :
                      <>
                      </>


                  ))}
                </>
                :
                <>
                </>
              } */}


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