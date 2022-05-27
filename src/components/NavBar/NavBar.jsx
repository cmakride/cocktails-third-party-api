import { NavLink } from "react-router-dom";
import logo from '../../assets/cocktail.png'

const NavBar = () => {
  return (
    <>
      <nav
        className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700 mb-4">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <NavLink to="/">
            <img src={logo} className="h-20" alt="" />

            </NavLink>
          </div>
        </div>

        <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-blue-700 lg:flex-grow">

            <NavLink
              to="/cocktails"

              className="text-xl block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              All Cocktails
            </NavLink>


          </div>

          <div className="relative mx-auto text-gray-600 lg:block hidden">

          </div>

        </div>

      </nav>

    </>
  );
}

export default NavBar;