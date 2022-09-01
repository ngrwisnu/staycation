import CardProduct from "components/CardProduct";
import React from "react";

const MostChosen = (props) => {
  return (
    <section className="container-fluid" ref={props.targetRef}>
      <div className="row container mx-auto">
        <h3>Most Chosen</h3>
        {props.mostChosen.map((item, index) => {
          return (
            <div key={index} className="col-4">
              <CardProduct
                image={item.imageUrl}
                name={item.name}
                price={item.price}
                unit={item.unit}
                city={item.city}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostChosen;
