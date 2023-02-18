import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Login() {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const Loginprocess = (e) => {
    e.preventDefault();
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={Loginprocess} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name<span className="errmsg"></span>
                </label>
                <input
                  type={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg"></span>
                </label>
                <input
                  type={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link className="btn btn-success" to={""}>
                New user
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
