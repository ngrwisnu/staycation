import Button from "components/Button";
import React from "react";

const Logo = (props) => {
  const logoType = props.type === "white" ? "logo-white" : "logo";
  return (
    <Button className="brand-icon" href="" type="link">
      <img src={`/images/${logoType}.png`} alt="Velcation logo" />
    </Button>
  );
};

export default Logo;
