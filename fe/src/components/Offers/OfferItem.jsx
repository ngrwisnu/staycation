import React from "react";

const OfferItem = (props) => {
  const { title, description, image, small } = props;
  return (
    <div className="offer-item" data-aos="fade-up">
      <div className="left-content col-5">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="right-content col-6">
        <img src={`/images/${image}.jpg`} alt={title} />
        <small className="text-end">{small}</small>
      </div>
    </div>
  );
};

export default OfferItem;
