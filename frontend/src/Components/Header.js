/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css"; // Import the CSS file

function Header() {
  return (
    <div>
      {/* Header - part 1 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* animated logo */}
          <Link to="/" className="navbar-brand" style={{ fontSize: "4vh" }}>
            <div id="logo-container">
              <span className="logo-letter">S</span>
              <span className="logo-letter">h</span>
              <span className="logo-letter">o</span>
              <span className="logo-letter">p</span>
              <span className="logo-letter">🛒</span>
              <span className="logo-letter">D</span>
              <span className="logo-letter">e</span>
              <span className="logo-letter">a</span>
              <span className="logo-letter">l</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Search Input and Search Button */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav p-0">
              <li className="nav-item float-end p-0">
                <form className="d-flex search-bar btn-dark border-0 p-0 input-group">
                  <input
                    id=""
                    className="form-control bg-white border-start btn btn-warning fm pe-1 border-0 bd-curve1"
                    style={{ width: "28vw" }}
                    type="search"
                    placeholder="Product Name, Category Name, etc."
                    aria-label="Search"
                  />
                  <button className="btn btn-warning bd-curve-2 fh" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i> Search
                  </button>
                </form>
              </li>
            </ul>
          </div>

          {/* login and cart buttons */}
          <div className="navbar-nav collapse navbar-collapse navbar-collapse2" id="navbarNav">
            <br />
            <div className="navbar-nav">
              <Link to="/login">
                <button className="btn btn-dark login-button pe-3 pb-2 login">
                  Login
                </button>
              </Link>
            </div>
            <div className="navbar-nav">
              <Link to="../../pages/regular_pages/cart.html" className="nav-link p-3">
                <i className="cart fa fa-shopping-cart" style={{ fontSize: "30px" }}></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header - part 2 */}
      <nav className="bg-light py-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active text-dark" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-products" className="nav-link text-dark">
              All Products
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" aria-expanded="false">
              Women
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/women/all-products" className="dropdown-item">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/women/dresses" className="dropdown-item">
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/women/pants" className="dropdown-item">
                  Pants
                </Link>
              </li>
              <li>
                <Link to="/women/skirts" className="dropdown-item">
                  Skirts
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" aria-expanded="false">
              Men
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/men/all-products" className="dropdown-item">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/men/shirts" className="dropdown-item">
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/men/pants" className="dropdown-item">
                  Pants
                </Link>
              </li>
              <li>
                <Link to="/men/hoodies" className="dropdown-item">
                  Hoodies
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/kids" className="nav-link text-dark">
              Kids
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
