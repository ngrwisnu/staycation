import BookingForm from "components/BookingForm";
import Footer from "components/Footer";
import Header from "components/Header";
import ProductActivities from "components/ProductActivities";
import ProductReview from "components/ProductReview";
import { Description, ImagePreview, Title } from "elements/ProductDetails";
import React, { Component, Fragment } from "react";

// import data from "../../data/itemDetailsData.json";

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
    const { itemDetails, bookDataHandler } = this.props;
    return (
      <Fragment>
        <Header />
        <Title data={itemDetails} />
        <ImagePreview data={itemDetails} />
        <main id="product-details" className="container">
          <div className="product-details__descriptions d-flex">
            <Description data={itemDetails} />
            <form action="">
              <BookingForm
                bookDataHandler={bookDataHandler}
                itemDetails={itemDetails}
              />
            </form>
          </div>
          <ProductActivities data={itemDetails.activities} />
          <ProductReview data={itemDetails.testimonial} />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductDetails;
