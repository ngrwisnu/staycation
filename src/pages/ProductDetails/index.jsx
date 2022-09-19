import BookingForm from "components/BookingForm";
import Footer from "components/Footer";
import Header from "components/Header";
import ProductActivities from "components/ProductActivities";
import ProductReview from "components/ProductReview";
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
        <main id="product-details" className="container">
          <div className="product-details__descriptions d-flex">
            <Description data={data} />
            <form action="">
              <BookingForm itemDetails={data} />
            </form>
          </div>
          <ProductActivities data={data.activities} />
          <ProductReview data={data.testimonial} />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductDetails;
