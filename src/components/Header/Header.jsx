import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/filmgenx_logo.svg";
import info from "../../assets/icons/info_icon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo">
        <Link to={"/"}>
          <img src={logo} alt="FilmGenx logo" className="header__image" />
        </Link>
        <h1 className="header__title">FilmGenx</h1>
      </div>
      <div className="header__cta">
        <div className="header__login">
          <Link to={"/login"}>
            <p className="header__text">Login</p>
          </Link>
        </div>
        <div className="header__signup">
          <p className="header__text">Sign Up</p>
        </div>
        <Link to={"/watchlist"}>
          <div className="header__watchlist">
            <p className="header__text">Watch List</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Header;
