import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import FormatNumber from "utils/FormatNumber";
import "./_booking-resume.scss";

const BookingResume = ({ price, tax }) => {
  const order = useSelector((state) => state.order);

  console.log(order);

  const [currentDuration, setCurrentDuration] = useState(order.duration);

  useEffect(() => {
    setCurrentDuration(order.duration - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order.date.endDate]);

  const totalPrice = () => {
    if (currentDuration === 0) {
      return FormatNumber(+price * 1);
    } else {
      return FormatNumber(+price * currentDuration);
    }
  };

  const taxPrice = (tax) => {
    if (currentDuration === 0) {
      return FormatNumber((+price * 1 * tax) / 100 + +price);
    } else {
      return FormatNumber(
        (+price * currentDuration * tax) / 100 + +price * currentDuration
      );
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
          <span>IDR {totalPrice()}</span>
        </div>
        {tax && (
          <div className="booking-resume__detail">
            <span>Tax</span>
            <span>{tax}%</span>
          </div>
        )}
      </div>
      <div className="booking-resume__total">
        <span>Total price</span>
        <span>IDR {tax ? taxPrice(tax) : totalPrice()}</span>
      </div>
      {tax ? "" : <small>The price does not include tax</small>}
    </div>
  );
};

export default BookingResume;
