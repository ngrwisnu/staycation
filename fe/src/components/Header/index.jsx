import React from "react";
import Button from "components/Button";
import Logo from "components/Logo";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

  const getNavLinkclassName = (path) => {
    return location.pathname === path ? "active" : "";
  };

  if (props.isCentered) {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container justify-content-center">
            <Logo />
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${getNavLinkclassName("/")}`}>
                <Button className="nav-link" href="/" type="link">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkclassName("/browse")}`}>
                <Button
                  className="nav-link"
                  href="#category"
                  type="link"
                  isExternal
                >
                  Browse
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkclassName("/stories")}`}>
                <Button
                  isExternal
                  className="nav-link"
                  type="link"
                  href="#stories"
                >
                  Stories
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
