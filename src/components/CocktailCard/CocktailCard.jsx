import { Link } from "react-router-dom"

const CocktailCard = ({ cocktail }) => {
  return (
    <>
      <div>
        <Link to="/cocktail" state={{ cocktail }}>
          <img src={cocktail.strDrinkThumb} alt="cocktail" className="w-full h-80 object-cover object-center" />

        </Link>
      </div>
      <div id="buttons-container" className="flex justify-center h-16 content-center gap-5">
        <div className="flex mt-4">
          <h3 className="font-cocktail-name" >{cocktail.strDrink}</h3>
        </div>
      </div>
    </>
  );
}

export default CocktailCard;