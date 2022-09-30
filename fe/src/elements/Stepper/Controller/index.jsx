import React from "react";

const Controller = (props) => {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-3">{props.children}</div>
      </div>
    </section>
  );
};

export default Controller;
