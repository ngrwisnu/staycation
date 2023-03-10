import CardReview from "components/CardReview";
import React from "react";

import "./_testimonials.scss";

const StoryCarousel = (props) => {
  return (
    <div
      id="testimonialsCarousel"
      className="carousel carousel-dark slide"
      data-bs-ride="true"
      data-bs-interval="60000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-item__wrapper">
            <CardReview
              id={props.stories[0]._id}
              rate={props.stories[0].rate}
              content={props.stories[0].content}
              name={props.stories[0].name}
              comment={props.stories[0].comment}
            />
            <CardReview
              id={props.stories[1]._id}
              rate={props.stories[1].rate}
              content={props.stories[1].content}
              name={props.stories[1].name}
              comment={props.stories[1].comment}
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item__wrapper">
            <CardReview
              id={props.stories[2]._id}
              rate={props.stories[2].rate}
              content={props.stories[2].content}
              name={props.stories[2].name}
              comment={props.stories[2].comment}
            />
            <CardReview
              id={props.stories[3]._id}
              rate={props.stories[3].rate}
              content={props.stories[3].content}
              name={props.stories[3].name}
              comment={props.stories[3].comment}
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item__wrapper">
            <CardReview
              id={props.stories[4]._id}
              rate={props.stories[4].rate}
              content={props.stories[4].content}
              name={props.stories[4].name}
              comment={props.stories[4].comment}
            />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default StoryCarousel;
