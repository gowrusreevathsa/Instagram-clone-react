import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="loginCard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />

          <button className="btn waves-effect waves-light blue darken-2">
            SignUp
          </button>

          <div className="customLink">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
