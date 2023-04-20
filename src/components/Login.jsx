import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let d = useContext(AppContext);
  let [state, setState] = useState({ email: "", password: "" });
  let nav = useNavigate();

  let handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  let HCemail = "example@xyz.com";
  let HCpass = "mypass";

  let handleSubmit = () => {
    if (state.email.length === 0 && state.password.length === 0) {
      alert("Plz fillout both the Fields Correctly");
    } else if (state.email.length === 0 || state.password.length === 0) {
      alert("Plz fillout both the Fields Correctly");
    } else if (state.email === HCemail && state.password === HCpass) {
      d.setAuth(true);
      nav("/create");
    }else{
      alert("Wrong Email or Password")
    }
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className="my-4">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
