import { BookingResume, InputText } from "elements/Form";
import React from "react";
import "./_booking-information.scss";

const BookingInformation = (props) => {
  const { data, itemDetails, dataState } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 booking-preview">
          <div className="card">
            <figure className="card__preview">
              <img src={itemDetails.imageUrl} alt="" />
            </figure>
            <span className="card__name">{itemDetails.name}</span>
            <span className="card__location">{itemDetails.location}</span>
          </div>
          <BookingResume
            price={itemDetails.price}
            duration={dataState.duration}
            endDate={dataState.date.endDate}
          />
        </div>
        <div className="col-5">
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.changeHandler}
          />
          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.changeHandler}
          />
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={props.changeHandler}
          />
          <label htmlFor="phone">Phone No.</label>
          <InputText
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={props.changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
