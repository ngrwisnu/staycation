import React from "react";

// import MostChosen1 from "assets/images/hotel-1.jpg";

const Card = ({ image, name, price, city, unit, isPopular }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={process.env.PUBLIC_URL + image}
          className="card-img-top"
          alt={name}
        />
      </div>
      <div className="card-body">
        <h4>
          IDR {price} <span>/ {unit}</span>
        </h4>
        <div className="description">
          <span>{name}</span>
          <span>{city}</span>
        </div>
        {isPopular ? (
          <span className="badge text-bg-primary">Popular choice</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
