import React from "react";
import CompleteIllustration from "assets/illustration/illustration.png";
import "./_completed.scss";

const Completed = () => {
  return (
    <div className="container">
      <div className="row checkout-completed">
        <img src={CompleteIllustration} alt="Payment completed illustration" />
        <p className="text-center">
          We will inform you via email soon once your transaction has been
          accepted
        </p>
      </div>
    </div>
  );
};

export default Completed;
