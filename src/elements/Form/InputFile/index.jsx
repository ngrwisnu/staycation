import React from "react";
import PropTypes from "prop-types";

import "./_input-file.scss";
import { useState, useRef } from "react";

const InputFile = (props) => {
  const {
    placeholder,
    name,
    accept,
    prepend,
    append,
    wrapperClassname,
    inputClassname,
  } = props;

  const [fileName, setFileName] = useState("");

  const refInputFile = useRef(null);

  const changeHandler = (e) => {
    setFileName(e.target.value);
    props.changeHandler({
      target: {
        name: e.target.name,
        value: e.target.files,
      },
    });
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
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={fileName}
          onChange={changeHandler}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={fileName}
          placeholder={placeholder}
          className={["form-control", inputClassname].join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputFile;

InputFile.defaultProps = {
  placeholder: "Choose the file here",
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  wrapperClassname: PropTypes.string,
  inputClassname: PropTypes.string,
};
