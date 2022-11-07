import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Stepper = (props) => {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  const [currentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) === 0 ? stepsKeys[0] : initialStep
  );

  const totalStep = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(currentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  }

  return (
    <div className="mt-3">
      {props.children(prevStep, nextStep, currentStep, steps)}
    </div>
  );
};

export default Stepper;

Stepper.propTypes = {
  steps: PropTypes.object.isRequired,
  initialStep: PropTypes.string,
};
