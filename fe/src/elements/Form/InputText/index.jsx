import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const InputText = (props) => {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    wrapperClassname,
    inputClassname,
    errorResponse,
  } = props;

  const [hasError, setHasError] = useState(null);

  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = /[0-9]*/;

  const changeHandler = (e) => {
    const target = {
      target: {
        name: name,
        value: e.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(e.target.value)) {
        setHasError(errorResponse);
      } else {
        setHasError("");
      }
    }

    if (type === "tel") {
      if (e.target.validity.valid) {
        props.changeHandler(target);
      } else {
        props.changeHandler(target);
      }
    }
  };

  return (
    <div className={["input-text mb-3", wrapperClassname].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type={type}
          name={name}
          pattern={pattern}
          className={["form-control", inputClassname].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={props.changeHandler}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
};

export default InputText;

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here",
  errorResponse: "Please match the requested format",
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  changeHandler: PropTypes.func,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  wrapperClassname: PropTypes.string,
  inputClassname: PropTypes.string,
};
