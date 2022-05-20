import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink
        to="/cocktails"
        
        className="text-xl hover:text-orange-600 duration-300"
      >
        All Cocktails
      </NavLink>
    </>
  );
}

export default NavBar;