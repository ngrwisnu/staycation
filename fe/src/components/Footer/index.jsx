import Button from "components/Button";
import React from "react";
import Logo from "../Logo";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row container mx-auto">
          <div className="col footer-logo">
            <Logo type="white" />
            <p className="logo-tagline">
              We create your beautiful holiday memorable
            </p>
          </div>
          <div className="col-2">
            <h6>For beginners</h6>
            <ul>
              <li>
                <Button isExternal type="link" href="/register">
                  New account
                </Button>
              </li>
              <li>
                <Button isExternal type="link" href="/properties">
                  Book a room
                </Button>
              </li>
              <li>
                <Button isExternal type="link" href="/payment">
                  Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6>Explore</h6>
            <ul>
              <li>
                <Button isExternal type="link" href="/about">
                  About
                </Button>
              </li>
              <li>
                <Button isExternal type="link" href="/privacy">
                  Privacy policy
                </Button>
              </li>
              <li>
                <Button isExternal type="link" href="/terms">
                  Terms & conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6>Contact us</h6>
            <ul>
              <li>
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li>
                <Button isExternal type="link" href="tel:+6221228882">
                  021-228-882
                </Button>
              </li>
              <li>
                <span>staycation building, 2nd floor, Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright &copy; 2022 Staycation. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
