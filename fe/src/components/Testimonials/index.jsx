import React from "react";
import StoryCarousel from "./Story";

import "./_testimonials.scss";

const Testimonials = ({ storiesData }) => {
  return (
    <section id="stories" className="container-fluid">
      <div className="row container mx-auto">
        <h3>
          Read Their <span>Experience</span>
        </h3>
        <div className="row stories">
          <StoryCarousel stories={storiesData} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
