import Footer from "components/Footer";
import Header from "components/Header";
import InputDate from "elements/Form/InputDate";
import InputGuest from "elements/Form/InputGuest";
import { Description, ImagePreview, Title } from "elements/ProductDetails";
import React, { Component, Fragment } from "react";

import data from "../../data/itemDetailsData.json";

class ProductDetails extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  componentDidMount() {
    window.title = "Product Details";
    window.scrollTo(0, 0);
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Title data={data} />
        <ImagePreview data={data} />
        <Description data={data} />
        <form action="">
          <InputGuest />
          <InputDate
            max={30}
            onChange={this.changeHandler}
            name="value"
            value={this.state.value}
            placeholder="Test"
          />
        </form>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductDetails;
