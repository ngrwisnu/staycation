// dummy data
// import ItemDetails from "data/itemDetailsData.json";

import Header from "components/Header";
import React, { Component } from "react";
import BookingInformation from "components/Checkout/BookingInformation";
import Payment from "components/Checkout/Payment";
import Completed from "components/Checkout/Completed";
import Stepper from "elements/Stepper";
import Numbering from "elements/Stepper/Numbering";
import Meta from "elements/Stepper/Meta";
import MainContent from "elements/Stepper/MainContent";
import Controller from "elements/Stepper/Controller";
import Button from "components/Button";
import { connect } from "react-redux";
import { updateOrder } from "../../redux/store/slices/order";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  changeHandler = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
  }

  render() {
    const { data } = this.state;
    const { itemDetails, dataState, checkoutData } = this.props;
    // const dataState = {
    //   duration: 1,
    //   date: {
    //     endDate: new Date(),
    //   },
    // };

    console.log(dataState);

    if (!checkoutData) {
      this.props.updateOrder({
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
        },
      });
    }

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkoutData}
            itemDetails={itemDetails}
            dataState={dataState}
            changeHandler={this.changeHandler}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            itemDetails={itemDetails}
            dataState={dataState}
            endDate={dataState}
            checkout={checkoutData}
            changeHandler={this.changeHandler}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps} initialStep="bookingInformation">
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={currentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={currentStep} />

              <MainContent data={steps} current={currentStep} />

              {currentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phone !== "" ? (
                    <Button
                      className="btn mb-3 checkout-btn"
                      type="button"
                      isBlock
                      isSecondary
                      onClick={nextStep}
                    >
                      Continue to Book
                    </Button>
                  ) : (
                    <Button
                      className="btn mb-3 checkout-btn"
                      type="button"
                      isBlock
                      isDisable
                    >
                      Continue to Book
                    </Button>
                  )}
                  <Button
                    className="btn checkout-btn"
                    type="link"
                    isBlock
                    isLight
                    isOutline
                    href={`/properties/${itemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {currentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                  data.bankName !== "" &&
                  data.bankHolder !== "" ? (
                    <Button
                      className="btn mb-3 checkout-btn"
                      type="button"
                      isBlock
                      isSecondary
                      onClick={nextStep}
                    >
                      Continue to Book
                    </Button>
                  ) : (
                    <Button
                      className="btn mb-3 checkout-btn"
                      type="button"
                      isBlock
                      isDisable
                    >
                      Continue to Book
                    </Button>
                  )}
                  <Button
                    className="btn checkout-btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {currentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isSecondary
                    href="/"
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkoutData: state.order,
  };
};

const mapDispatchToProps = { updateOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
