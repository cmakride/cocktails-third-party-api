import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const CocktailDetail = () => {
  const [cocktailDetails, setCocktailDetails] = useState({})

  let location = useLocation()

  // ! getting the ID from location state passed down from cocktailCard

  const cocktailID = location.state.drinkId

  const details = cocktailDetails.drinks

  useEffect(() => {
    getDetails(cocktailID)
      .then(cocktailDetails => setCocktailDetails(cocktailDetails))
  }, [cocktailID])

  return ( 
    details ? 
    <>
    
    </>
    :
    <>
    <h2>Loading Details</h2>
    </>
   );
}
 
export default CocktailDetail;