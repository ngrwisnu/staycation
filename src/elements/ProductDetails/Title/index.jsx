import React from "react";

const Title = ({ data }) => {
  console.log(data);

  return (
    <section className="container mx-auto text-center">
      <h2>{data.name}</h2>
      <span>{data.city}</span>
    </section>
  );
};

export default Title;
