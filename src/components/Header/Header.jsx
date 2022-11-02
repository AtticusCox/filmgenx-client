import React from "react";
import logo from "../../assets/icons/filmgenx_logo.svg";
import info from "../../assets/icons/info_icon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo">
        <img src={logo} alt="FilmGenx logo" className="header__image" />
        <h1 className="header__title">FilmGenx</h1>
      </div>
      <div className="header__logo--info">
        <img src={info} alt="info icon" />
      </div>
    </section>
  );
};

export default Header;
