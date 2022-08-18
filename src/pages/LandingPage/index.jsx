import Header from "components/Header";
import Hero from "components/Hero";
import data from "data";
import React, { Component, Fragment } from "react";

export default class LandingPage extends Component {
  render() {
    const dataSosialProof = data.hero;
    return (
      <Fragment>
        <Header {...this.props} />
        <Hero dataSosialProof={dataSosialProof} />
      </Fragment>
    );
  }
}
