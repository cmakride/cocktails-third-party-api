const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'

export function getCocktails(){
  return fetch(`${baseUrl}`)
  .then(res => res.json())
}