import Button from "components/Button";
import { BookingResume, InputDate, InputGuest } from "elements/Form";
import React from "react";
import FormatNumber from "utils/FormatNumber";
import { useNavigate } from "react-router-dom";

import "./_card-booking.scss";

const CardBooking = ({ itemDetails, dataState, updateDataHandler }) => {
  const navigate = useNavigate();

  const startBookingHandler = () => {
    localStorage.setItem("order", JSON.stringify(dataState));
    navigate("/checkout");
  };

  return (
    <div className="col-5 card-booking">
      <div className="card-booking__header">
        <h3 className="card-booking__price">
          IDR {FormatNumber(itemDetails.price)}
        </h3>
        <span>/ {itemDetails.unit}</span>
      </div>
      <div className="card-booking__guest">
        <InputGuest />
      </div>
      <div className="card-booking__date">
        <InputDate
          onChange={updateDataHandler}
          name="date"
          value={dataState.date}
        />
      </div>
      <BookingResume
        price={itemDetails.price}
        duration={dataState.duration}
        endDate={dataState.date.endDate}
      />
      <Button
        className="btn"
        hasShadow
        isPrimaryBtn
        isBlock
        onClick={startBookingHandler}
      >
        Continue to Book
      </Button>
    </div>
  );
};

export default CardBooking;
