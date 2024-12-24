import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import AuthContext from "../Auth/AuthContext";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { user, signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out .stay here. dont leave me alone");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtifacts"> All Artifact</NavLink>
      </li>
      <li>
        <NavLink to="/addArtifacts">Add Artifacts</NavLink>
      </li>
    </>
  );

  const dropDownLinks = (
    <>
      <li>
        <Link to="/" className="justify-between">
          Profile
          <span className="badge">New</span>
        </Link>
      </li>
      <li>
        <Link to="/myArtifacts">My Artifacts</Link>
      </li>
      <li>
        <Link to="/likedArtifacts">Liked Artifacts</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl">
          <h3 className="text-3xl font-bold">ArtifactArc</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="flex gap-2 items-center">
          {user ? (
            <>
              {/* <button
                onClick={handleSignOut}
                className="btn btn-neutral rounded-none"
              >
                Sign out
              </button> */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div
                    className="w-10 border-2 rounded-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img alt="User Profile" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {dropDownLinks}
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link className="btn btn-outline rounded-none" to="/register">
                Register
              </Link>
              <Link to="/signIn">
                <button className="btn  btn-neutral rounded-none">
                  Sign In
                </button>
              </Link>
            </>
          )}

          <div
            className={`absolute mt-32 bg-opacity-50 text-center bg-slate-200 p-3 rounded-lg right-4 items-end mr-28 ${
              isHovered ? "block" : "hidden"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={handleSignOut}
              className="btn btn-neutral rounded-none "
            >
              Logout
            </button>
            <p className="text-red mt-2 font-bold z-20">{user?.displayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
