import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="loginCard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />

          <button className="btn waves-effect waves-light blue darken-2">
            Login
          </button>

          <div className="customLink">
            <Link to="/signup">Don't have have an account? Signup</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
