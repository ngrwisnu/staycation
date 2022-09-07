import React, { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import PropTypes from "prop-types";
import formatDate from "elements/FormatDate";
import CalendarIcon from "assets/icons/calendar.svg";

// import scss
import "./_input-date.scss";

// import skeleton and themes from react date range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const InputDate = ({ value, placeholder, name, onChange }) => {
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };

    onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  });

  const dateRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dateRef && !dateRef.current.contains(e.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div className="input-date" ref={dateRef}>
      <label htmlFor="input-date">Pick the Date</label>
      <div className="date-wrapper">
        <div className="img-box">
          <img src={CalendarIcon} alt="Calendar icon" />
        </div>
        <input
          id="input-date"
          type="text"
          value={displayDate}
          readOnly
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />
        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputDate;

InputDate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
