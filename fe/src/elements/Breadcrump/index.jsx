import Button from "components/Button";
import React from "react";

import PropTypes from "prop-types";

const Breadcrumb = (props) => {
  const className = ["breadcrumb", props.className];

  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.breadcrumbData.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item ${
                index === props.breadcrumbData.length - 1 ? "active" : ""
              }`}
            >
              {index === props.breadcrumbData.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
  breadcrumpData: PropTypes.array,
  className: PropTypes.string,
};
