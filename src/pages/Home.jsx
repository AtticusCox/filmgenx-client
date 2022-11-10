import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="home">
        <Link to={"/movie"}>
          <button className="home__button">Click Here to get started</button>
        </Link>
      </section>
    </>
  );
};

export default Home;
