
export function getCocktails() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then(res => res.json())
}

export function getDetails(cocktailId) {

  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    .then(res => res.json())
}

export function searchCocktails(query) {
  
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res => res.json())
}

export function searchOneLetter(query) {

  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`)
    .then(res => res.json())
}
