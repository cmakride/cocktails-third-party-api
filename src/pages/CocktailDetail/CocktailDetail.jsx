import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const CocktailDetail = (props) => {
  const [cocktailDetails, setCocktailDetails] = useState({})

  let location = useLocation()

  // useEffect(() => {
  //   getDetails(location.state.starship.url)
  //     .then(starShipDetails => setStarShipDetails(starShipDetails))
  // }, [])

  return ( 
    <>
    <h2>COCktail Details</h2>
    </>
   );
}
 
export default CocktailDetail;