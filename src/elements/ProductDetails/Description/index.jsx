import React from "react";

const Description = ({ data }) => {
  return (
    <div>
      <h4>About the place</h4>
      <p>{data.description}</p>
    </div>
  );
};

export default Description;
