
export function getCocktails(){
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
  .then(res => res.json())
}

export function getDetails(cocktailId){
  
  return fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
  .then(res => res.json())
}