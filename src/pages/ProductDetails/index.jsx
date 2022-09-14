import BookingForm from "components/BookingForm";
import Footer from "components/Footer";
import Header from "components/Header";
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
        <main id="product-details" className="container d-flex">
          <Description data={data} />
          <form action="">
            <BookingForm itemDetails={data} />
          </form>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductDetails;
