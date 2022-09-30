import React from "react";
import PropTypes from "prop-types";

import "./_numbering.scss";

const Numbering = ({ className, data, current }) => {
  const keysOfData = Object.keys(data);
  return (
    <ol className={["stepper", className].join(" ")}>
      {keysOfData.map((list, index) => {
        let isActive = list === current ? "active" : "";

        if (index + 1 === keysOfData.length) {
          isActive = "";
          return null;
        }

        return (
          <li key={`list-${index}`} className={[isActive].join(" ")}>
            {index + 1}
          </li>
        );
      })}
    </ol>
  );
};

export default Numbering;

Numbering.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  current: PropTypes.string,
};
