import CardBooking from "components/CardBooking";
import React, { Component } from "react";
class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);

      const countDuration = new Date(endDate - startDate).getDate();

      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });

      this.props.bookDataHandler(data);
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  // startBooking = () => {
  //   const { data } = this.state;

  //   this.props.startBook({
  //     _id: this.props.itemDetails._id,
  //     duration: data.duration,
  //     date: {
  //       startDate: data.date.startDate,
  //       endDate: data.date.endDate,
  //     },
  //   });
  // };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (
      <CardBooking
        itemDetails={itemDetails}
        dataState={data}
        updateDataHandler={this.updateData}
      />
    );
  }
}

export default BookingForm;
