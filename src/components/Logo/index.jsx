import Button from "components/Button";
import React from "react";

import BrandLogo from "assets/images/logo.png";

const Logo = () => {
  return (
    <Button className="brand-icon" href="" type="link">
      <img src={BrandLogo} alt="Staycation logo" />
    </Button>
  );
};

export default Logo;
