import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

function Login() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error });
        } else {
          M.toast({ html: "Sign-in Successful" });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="loginCard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <input type="text" placeholder="E-mail" onChange={changeEmail} />
          <input
            type="password"
            placeholder="Password"
            onChange={changePassword}
          />

          <button
            className="btn waves-effect waves-light blue darken-2"
            onClick={PostData}
          >
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
