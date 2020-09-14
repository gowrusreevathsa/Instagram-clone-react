import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error });
        } else {
          M.toast({ html: data.message });
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeName = (e) => {
    setName(e.target.value);
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
          {}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={changeName}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={changeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
          />

          <button
            className="btn waves-effect waves-light blue darken-2"
            onClick={PostData}
          >
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
