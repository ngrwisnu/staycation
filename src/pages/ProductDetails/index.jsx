import Breadcrumb from "elements/Breadcrump";
import InputDate from "elements/Form/InputDate";
import InputGuest from "elements/Form/InputGuest";
import React, { Component, Fragment } from "react";

class ProductDetails extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <Fragment>
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
        <Breadcrumb breadcrumbData={breadcrumbList} />
      </Fragment>
    );
  }
}

export default ProductDetails;
