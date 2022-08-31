import Button from "components/Button";
import React from "react";
import FormatNumber from "utils/FormatNumber";

// import assets

const Hero = (props) => {
  // function showDestination() {
  //   window.scrollTo();
  // }

  return (
    <section
      id="hero"
      className="hero container-fluid pt-4 pb-4 vh-75 border border-danger"
    >
      <div className="row container mx-auto border border-dark position-relative">
        <div className="col">
          <div className="content">
            <h1 className="mb-0">
              Forget your tough day,
              <br /> <span>start vacation</span> with us
            </h1>
            <p className="fw-light lh-base mt-2 mb-0">
              We provide what you need to enjoy your vacation with your family.
              This is the time to make another memorable moments
            </p>
            <Button
              className="btn mt-3"
              isPrimaryBtn
              onClick={() => props.sendRef(props.targetRef.current)}
            >
              Discover destination
            </Button>
          </div>

          <div className="social-proof position-absolute">
            {Object.entries(props.dataSosialProof).map(([key, val]) => (
              <div key={key} className="social-proof__item">
                <h5>{FormatNumber(val)}</h5>
                <h6 className="mb-0">{key}</h6>
                {key === "travelers" && <span>/ year</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
