import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="auth_container">
      <div className="auth_wrapper">
        <span className="auth_logo">Dope Chat</span>
        <span className="auth_title">Log-in</span>
        <form className="form" action="">
          {/* Textfields */}
          <input className="form_field" type="email" placeholder="email" />

          <input
            className="form_field"
            type="password"
            placeholder="password"
          />

          {/* Log-in Button */}
          <button className="form_button">Log in</button>
        </form>

        <p className="auth_switch">
          Already have an Account?{" "}
          <Link className="switch_link" to="/sign-up">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};
