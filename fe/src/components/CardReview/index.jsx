import React from "react";

import "./_card-review.scss";

const CardReview = ({ id, rate, content, name, occupation }) => {
  return (
    <div className="card-review">
      <div className="card-body">
        <div className="card-body__rating">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="star">
              <g id="star_2">
                <path
                  id="Star 1"
                  d="M23.0489 3.92705C23.3483 3.00574 24.6517 3.00574 24.9511 3.92705L28.9393 16.2016C29.0732 16.6136 29.4571 16.8926 29.8904 16.8926H42.7966C43.7653 16.8926 44.1681 18.1322 43.3844 18.7016L32.943 26.2877C32.5925 26.5424 32.4459 26.9937 32.5798 27.4058L36.568 39.6803C36.8674 40.6016 35.8129 41.3678 35.0292 40.7984L24.5878 33.2123C24.2373 32.9576 23.7627 32.9576 23.4122 33.2123L12.9708 40.7984C12.1871 41.3678 11.1326 40.6017 11.432 39.6803L15.4202 27.4058C15.5541 26.9937 15.4075 26.5424 15.057 26.2877L4.6156 18.7016C3.83189 18.1322 4.23466 16.8926 5.20338 16.8926H18.1096C18.5429 16.8926 18.9268 16.6136 19.0607 16.2016L23.0489 3.92705Z"
                  fill="#F9AF3F"
                />
              </g>
            </g>
          </svg>
          <span>{rate} / 5.0</span>
        </div>
        <div className="card-body__content">
          <p className="card-text">{content}</p>
          <p className="card-body__author">
            {name}, {occupation}
          </p>
        </div>
        <a href="#review" className="card-link">
          Read the story
        </a>
      </div>
    </div>
  );
};

export default CardReview;
