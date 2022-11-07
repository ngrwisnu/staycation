import React from "react";
import "./_controller.scss";

const Controller = (props) => {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col">{props.children}</div>
      </div>
    </section>
  );
};

export default Controller;
