import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-shows"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              My Shows
            </NavLink>
          </li>
        </ul>
      </nav>
      <span className="logo">Watcher</span>
    </header>
  );
};

export default NavBar;
