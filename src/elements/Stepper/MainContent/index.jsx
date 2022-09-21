import React from "react";

const MainContent = ({ data, current }) => {
  return <>{data[current] && data[current].content}</>;
};

export default MainContent;
