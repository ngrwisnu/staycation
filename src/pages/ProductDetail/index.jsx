import InputDate from "elements/InputDate";
import InputGuest from "elements/InputGuest";
import React, { Component, Fragment } from "react";

class ProductDetail extends Component {
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
      </Fragment>
    );
  }
}

export default ProductDetail;
