import React from "react";

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
        </div>
      </div>
    </>
  );
}

export default Login;
