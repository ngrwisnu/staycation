import CardReview from "components/CardReview";
import React from "react";

import "./_product-review.scss";

const ProductReview = ({ data }) => {
  return (
    <div className="row product-review">
      <div className="col-6 image-preview product-review__image">
        <figure className="image-preview__card-wrapper">
          <img
            src={data.imageUrl}
            alt={data.familyName}
            className="image-preview__img-cover"
          />
        </figure>
      </div>
      <div className="col-6 product-review__body">
        <CardReview
          id={data._id}
          rate={data.rate}
          content={data.content}
          name={data.familyName}
          occupation={data.familyOccupation}
        />
      </div>
    </div>
  );
};

export default ProductReview;
