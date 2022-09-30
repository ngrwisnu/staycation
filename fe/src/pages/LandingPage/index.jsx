import Categories from "components/Categories";
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import MostChosen from "components/MostChosen";
import Testimonials from "components/Testimonials";
import data from "data/landingPageData";
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
        <Categories categoryData={data.categories} />
        <Testimonials storiesData={data.stories} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
