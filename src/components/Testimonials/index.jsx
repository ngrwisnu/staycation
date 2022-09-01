import CardReview from "components/CardReview";
import React from "react";

const Testimonials = ({ storiesData }) => {
  return (
    <section id="testimonials" className="container-fluid">
      <div className="row container mx-auto">
        <h3>Read their story</h3>
        <div className="row testimonials">
          {storiesData.map((review) => (
            <CardReview
              key={review._id}
              id={review._id}
              rate={review.rate}
              content={review.content}
              name={review.name}
              occupation={review.occupation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
