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
            <p>Login</p>
          </Link>
        </div>
        <div className="header__signup">
          <p>Sign Up</p>
        </div>
        <div className="header__logo--info">
          <img src={info} alt="info icon" />
        </div>
      </div>
    </section>
  );
};

export default Header;
