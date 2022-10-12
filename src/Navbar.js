import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import levimg from "./assets/fulcrum.png";

function Navbar() {
  const location = useLocation();
  if (location.pathname !== "/")
    return (
      <div class="row text-center">
        <div class="col-4">
          <NavLink to="/">
            <img class="size-fulcrum-mark" src={levimg} alt="leverage" />
          </NavLink>
        </div>
        <div class="col-2 bg-ltltGray">
          <div class="mt-2">
            <NavLink to="">MAIN MENU</NavLink>
          </div>
        </div>
        <div class="col-2 bg-ltltGray">
          <div class="mt-2">
            <NavLink to="">LOGIN</NavLink>
          </div>
        </div>
        <div class="col-2 bg-ltltGray">
          <div class="mt-2">
            <NavLink to="">SELECT PROJECT</NavLink>
          </div>
        </div>
        <div class="col-2 bg-ltltGray">
          <div class="mt-2">
            <NavLink to="">LOGOUT</NavLink>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
