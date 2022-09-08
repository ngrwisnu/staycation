import React from "react";

const Title = ({ data }) => {
  console.log(data);

  return (
    <div className="container mx-auto text-center">
      <h2>{data.name}</h2>
      <span>{data.city}</span>
    </div>
  );
};

export default Title;
