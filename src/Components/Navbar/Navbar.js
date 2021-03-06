import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="bg-primary w-full mx-auto">
      <div className="navbar fixed top-0 z-50 bg-primary text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#F0542D] rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {user && (
                <li>
                  <button onClick={logout} className="my-2 mr-5 font-semibold">
                    Logout
                  </button>
                </li>
              )}
              {!user && (
                <>
                  <li>
                    <NavLink className="my-2 mr-5 font-semibold" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="my-2 mr-5 font-semibold " to="/signup">
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <a className="text-2xl ml-5 text-white">Constraction</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink className="hover:underline" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline" to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline" to="/blog">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline" to="/product">
                Products
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  className="my-2 mr-5 font-semibold hover:underline"
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
            )}
            <li>
              <NavLink className="hover:underline" to="/contact">
                Contact
              </NavLink>
            </li>
            {user && (
              <li>
                <button
                  onClick={logout}
                  className="my-2 mr-5 font-semibold hover:underline"
                >
                  Logout
                </button>
              </li>
            )}
            {!user && (
              <>
                <li>
                  <NavLink
                    className="my-2 mr-5 font-semibold hover:underline"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="my-2 mr-5 font-semibold hover:underline"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
