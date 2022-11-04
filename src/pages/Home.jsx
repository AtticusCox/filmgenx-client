import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to={"/movie"}>
        <button>Click Here to get started</button>
      </Link>
    </>
  );
};

export default Home;
