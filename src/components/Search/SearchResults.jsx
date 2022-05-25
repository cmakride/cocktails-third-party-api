import CocktailCard from "../CocktailCard/CocktailCard";


const SearchResults = (props) => {

  const searchedCocktailsArray = props.cocktails.drinks
  const searchValue = props.searchString.query






  return (

    searchedCocktailsArray ?
      <>

        <div className="my-4 grid grid-cols-1 gap-4 mx-5 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {searchedCocktailsArray.map((cocktail, idx) => (

            <div className="h-96 w-96 max-w-xs border-2 border-gray-200 border-opacity-600 rounded-lg overflow-hidden bg-gradient-to-r from-light-100 to-dark-100" key={idx}>

              <CocktailCard cocktail={cocktail}
              />

            </div>
          ))}
        </div>
      </>
      :
      <>
        {searchValue ?
        <>
        
        </>
        :
        <>
          <h4 className="my-8 text-back text-center text-3xl font-bold p-4">Please Enter A Cocktail</h4>
        </>
      }
      </>

  );
}

export default SearchResults;