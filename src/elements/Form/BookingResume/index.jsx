import React from "react";
import FormatNumber from "utils/FormatNumber";
import "./_booking-resume.scss";

const BookingResume = ({ price, duration }) => {
  const totalPriceNoTaxes = () => {
    return FormatNumber(+price * duration);
  };

  return (
    <div className="booking-resume">
      <div className="booking-resume__details">
        <div className="booking-resume__detail">
          <span>
            IDR {FormatNumber(price)} x {duration}
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
