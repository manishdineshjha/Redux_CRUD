import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users);
  let nav = useNavigate();
  let d = useContext(AppContext);
  let handleLogout = () => {
    d.setAuth(false);
    nav("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todo's
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {d.auth ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/create">
                      Create Todo
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/read">
                      All Todo's({allUsers.length})
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/"
                    ></Link>
                  </li>
                </>
              )}
            </ul>
            <div className="d-flex">
              {d.auth && (
                <button
                  className="btn btn-outline-success"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
