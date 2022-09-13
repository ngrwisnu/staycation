import React from "react";

import "./_title.scss";

const Title = ({ data }) => {
  return (
    <div className="container mx-auto text-center product-title">
      <h2>{data.name}</h2>
      <span>{data.city}</span>
    </div>
  );
};

export default Title;
