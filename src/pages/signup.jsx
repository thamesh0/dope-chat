import React from "react";
import { Link } from "react-router-dom";
import addAvatar from "../assets/addAvatar.png";
export const Signup = () => {
  return (
    <div className="wrapper">
      <div className="form">
        <span className="form__logo">Lama Chat</span>
        <span className="form__title">Sign-up</span>

        <form className="form__input" action="">
          {/* Textfields */}
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          {/* file Input */}
          <input className="file__input" id="file" type="file" />
          <label className="file__label" htmlFor="file">
            <img src={addAvatar} alt="Add an Avatar" />
            <span>Add an avatar</span>
          </label>

          {/* Sign-up Button */}
          <button>Sign up</button>
        </form>

        {/* Switch to Login */}
        <p className="form__switch">
          Don't have an Account?{" "}
          <Link className="switch__link" to="/log-in">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
