import React from "react";
import FormatNumber from "utils/FormatNumber";
import "./_booking-resume.scss";

const BookingResume = ({ itemDetails, duration }) => {
  console.log(typeof FormatNumber(itemDetails.price));
  const totalPriceNoTaxes = () => {
    return FormatNumber(+itemDetails.price * duration);
  };

  return (
    <div className="booking-resume">
      <div className="booking-resume__details">
        <div className="booking-resume__detail">
          <span>
            IDR {FormatNumber(itemDetails.price)} x {duration}
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
