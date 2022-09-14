import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.scss";

const Button = (props) => {
  const className = [props.className];
  props.isPrimaryBtn && className.push("btn-orange");
  props.isLight && className.push("btn-light");
  props.isLarge && className.push("btn-lg");
  props.isSmall && className.push("btn-sm");
  props.isBlock && className.push("btn-block");
  props.hasShadow && className.push("btn-shadow");

  const onClick = () => {
    props.onClick && props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) {
      return className.push("disabled");
    }

    return (
      <span className={className.join(" ")}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href={props.href}
          className={className.join(" ")}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link to={props.href} className={className.join(" ")} onClick={onClick}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={className.join(" ")} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(["button", "link"]),
  onClick: PropTypes.func,
  target: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  isPrimaryBtn: PropTypes.bool,
  isLight: PropTypes.bool,
  isExternal: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  hasShadow: PropTypes.bool,
};
