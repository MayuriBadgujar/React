import React from 'react'
import logo from '../assets/MovieFlixLogo.png'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className="bg-info-subtle">
        {/*  bg-body-tertiary delete this and apply dark  } */}
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={logo} alt="" width={150} />
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 menus">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/popular"
                  >
                    Popular
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/upcoming"
                  >
                    Upcoming
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/top">
                    TopRated
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
