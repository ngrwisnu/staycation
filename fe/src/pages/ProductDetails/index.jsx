import BookingForm from "components/BookingForm";
import Footer from "components/Footer";
import Header from "components/Header";
import ProductActivities from "components/ProductActivities";
import ProductReview from "components/ProductReview";
import { Description, ImagePreview, Title } from "elements/ProductDetails";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { updateOrder } from "../../redux/store/slices/order";

class ProductDetails extends Component {
  componentDidMount() {
    window.title = "Product Details";
    window.scrollTo(0, 0);
  }

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
            <div style={{ width: "100%" }}>
              <BookingForm
                bookDataHandler={bookDataHandler}
                itemDetails={itemDetails}
                startBook={this.props.updateOrder}
              />
            </div>
          </div>
          <ProductActivities data={itemDetails.activities} />
          <ProductReview data={itemDetails.testimonial} />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapDispatchToProps = { updateOrder };

export default connect(null, mapDispatchToProps)(ProductDetails);
