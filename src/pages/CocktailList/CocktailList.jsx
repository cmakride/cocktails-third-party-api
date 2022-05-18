import Cocktail from "../../components/Cocktail/Cocktail";
import { useState, useEffect } from "react";
import { getCocktails } from "../../services/api-calls";



const CocktailList = (props) => {
  const [cocktails,setcocktails]=useState([])

  useEffect(()=>{
    getCocktails()
    .then(cocktailsData => setcocktails(cocktailsData))
  },[])


  return ( 
    <>
    <h2>COCKTAIL LIST PAGE</h2>
    <Cocktail/>
    </>
   );
}
 
export default CocktailList;