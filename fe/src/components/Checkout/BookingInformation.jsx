import { BookingResume, InputText } from "elements/Form";
import "./_booking-information.scss";

const BookingInformation = (props) => {
  const { data, itemDetails, checkout } = props;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-5 booking-preview">
          <div className="checkout-card">
            <figure className="card__preview">
              <img src={itemDetails.imageUrls[0].url} alt="Location preview" />
            </figure>
            <span className="card__name">{itemDetails.name}</span>
            <span className="card__location">{itemDetails.location}</span>
          </div>
          <BookingResume
            price={itemDetails.price}
            duration={checkout.duration}
            endDate={checkout.date.endDate}
          />
        </div>
        <div className="col-5 booking-form">
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            changeHandler={props.changeHandler}
          />
          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            changeHandler={props.changeHandler}
          />
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={data.email}
            changeHandler={props.changeHandler}
          />
          <label htmlFor="phone">Phone No.</label>
          <InputText
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            changeHandler={props.changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
