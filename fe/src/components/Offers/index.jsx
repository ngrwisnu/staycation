import React from "react";
import OfferItem from "./OfferItem";
import "./_offer.scss";
import data from "../../data/landingPageData";

const Offers = () => {
  return (
    <section id="offers" className="container-fluid">
      <div className="row container mx-auto">
        <div className="col">
          <h3>
            More Offers to Increase the <span>Experience</span>
          </h3>
          {data.offers.map((item) => {
            return (
              <OfferItem
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                small={item.small}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
