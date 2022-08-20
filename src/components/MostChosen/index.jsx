import Card from "components/Card";
import React from "react";

const MostChosen = (props) => {
  return (
    <section className="container-fluid" ref={props.targetRef}>
      <div className="row container mx-auto">
        <h3>Most Chosen</h3>
        {props.mostChosen.map((item, index) => {
          return (
            <div key={index} className="col-4">
              <Card
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
