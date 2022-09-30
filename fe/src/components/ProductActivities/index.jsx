import React from "react";
import CardProduct from "components/CardProduct";

const ProductActivities = ({ data }) => {
  return (
    <div className="product-details__activities row">
      <h4>Things to do</h4>
      {data.map((activity) => (
        <div key={activity._id} className="col-3">
          <CardProduct
            id={activity._id}
            image={activity.imageUrl}
            name={activity.name}
            city={activity.type}
            isActivities
            isMini
          />
        </div>
      ))}
    </div>
  );
};

export default ProductActivities;
