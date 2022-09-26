import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormatNumber from "utils/FormatNumber";
import "./_booking-resume.scss";

const BookingResume = ({ price, duration, endDate }) => {
  const [currentDuration, setCurrentDuration] = useState(duration);

  useEffect(() => {
    console.log(currentDuration);
    setCurrentDuration(duration - 1);
    console.log("run");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate]);

  const totalPriceNoTaxes = () => {
    if (currentDuration === 0) {
      return FormatNumber(+price * 1);
    } else {
      return FormatNumber(+price * currentDuration);
    }
  };

  return (
    <div className="booking-resume">
      <div className="booking-resume__details">
        <div className="booking-resume__detail">
          <span>
            IDR {FormatNumber(price)} x{" "}
            {currentDuration === 0 ? 1 : currentDuration} night(s)
          </span>
          <span>IDR {totalPriceNoTaxes()}</span>
        </div>
      </div>
      <div className="booking-resume__total">
        <span>Total price before taxes</span>
        <span>IDR {totalPriceNoTaxes()}</span>
      </div>
    </div>
  );
};

export default BookingResume;
