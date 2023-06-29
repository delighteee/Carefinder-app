import { NavLink, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-2">
      <header>
        <nav className="container flex items-center  sm:mt-12 ">
          <div className="py-1">
            <img src="src/assets/cflogo.svg" alt=""></img>
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-Grey/900 uppercase text-sm">
            <NavLink to="/">
              <li className="cursor-pointer hover:text-Primary hover:font-semibold">
                Home
              </li>
            </NavLink>{" "}
            <NavLink to="/Contact">
              <li className="cursor-pointer hover:text-Primary hover:font-semibold">
                Contacts
              </li>
            </NavLink>{" "}
            <button
              onClick={() => navigate("/FindHospital")}
              type="button"
              className=" uppercase btn btn-primary hover:bg-Secondary"
            >
              Find a hospital
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end ">
            <i className=" text-3xl fas fa-bars"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
