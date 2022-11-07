import React from "react";

const Meta = ({ data, current }) => {
  return (
    <div className="text-center mt-4">
      <h1>{data[current] && data[current].title}</h1>
      <p className="lead text-gray-500">
        {data[current] && data[current].description}
      </p>
    </div>
  );
};

export default Meta;
