import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="form">
          <span className="form__logo">Lama Chat</span>
          <span className="form__title">Sign-up</span>
          <form action="">
            {/* Textfields */}
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            {/* Log-in Button */}
            <button>Log in</button>
          </form>
          <p className="form__switch">
            Already have an Account?{" "}
            <Link className="switch__link" to="/sign-up">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
