import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <section className="form">
        <div className="form__container">
          <h2 className="form__title">Sign In</h2>
          <form action="submit" className="form__inputs">
            <input
              type="text"
              className="form__username"
              placeholder="Username"
            />
            <input
              type="text"
              className="form__password"
              placeholder="Password"
            />
          </form>
          <button className="form__button">Login</button>
        </div>
      </section>
    </>
  );
};

export default Login;
