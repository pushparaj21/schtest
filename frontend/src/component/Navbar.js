import React from "react";
import style from "../css/NavBar.module.css";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const Navbar = () => {
  return (
    <nav>
      <div className={style.titleName}>
        {/* <NavLink className={style.NavlinkStyle} to="/"> */}
        Dashboard
        {/* </NavLink> */}
      </div>
      <div className={style.menu_list}>
        <NavLink className={style.NavlinkStyle} to="/">
          Home
        </NavLink>
        <NavLink className={style.NavlinkStyle} to="/createEntry">
          Create Entry
        </NavLink>
        <NavLink className={style.NavlinkStyle} to="/viewlog">
          View
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
