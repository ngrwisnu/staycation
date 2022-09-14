import React from "react";
import "./_booking-resume.scss";

const BookingResume = () => {
  return (
    <div className="booking-resume">
      <div className="booking-resume__details">
        <div className="booking-resume__detail">
          <span>IDR 124000 x 3</span>
          <span>IDR 372000</span>
        </div>
      </div>
      <div className="booking-resume__total">
        <span>Total price before taxes</span>
        <span>IDR 372000</span>
      </div>
    </div>
  );
};

export default BookingResume;
