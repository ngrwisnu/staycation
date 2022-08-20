import Header from "components/Header";
import Hero from "components/Hero";
import MostChosen from "components/MostChosen";
import data from "data";
import React, { Fragment, useRef } from "react";

const LandingPage = () => {
  const dataSosialProof = data.hero;
  const linkRef = useRef(null);

  const sendRef = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <Header />
      <Hero
        sendRef={sendRef}
        targetRef={linkRef}
        dataSosialProof={dataSosialProof}
      />
      <main>
        <MostChosen targetRef={linkRef} mostChosen={data.mostChosen} />
      </main>
    </Fragment>
  );
};

export default LandingPage;
