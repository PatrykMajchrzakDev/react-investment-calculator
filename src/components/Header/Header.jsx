import React from "react";
import logo from "../../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
      <h2>Input some data and let the calculator do the magic!</h2>
    </header>
  );
};

export default Header;
