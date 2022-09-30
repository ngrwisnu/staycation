import Button from "components/Button";
import React from "react";

const Logo = () => {
  return (
    <Button className="brand-icon" href="" type="link">
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="Staycation logo"
      />
    </Button>
  );
};

export default Logo;
