import React, { Component } from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import InputDate from ".";

class TestInput extends Component {
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
      <InputDate
        max={30}
        onChange={this.changeHandler}
        name="value"
        value={this.state.value}
        placeholder="Test"
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = screen.getByLabelText("Pick the Date");
  const input = screen.getByPlaceholderText("Test");

  return {
    container,
    wrapper,
    input,
  };
};

test("Should have wrapper / label", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test('Should have tag <input> and has placeholder "Test"', () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("Should show date picker when click input field", () => {
  const { container, input } = setup();

  // eslint-disable-next-line testing-library/no-debugging-utils
  //   screen.debug();
  fireEvent.click(input, { button: 1 });
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();

  expect(datePickerWrapper).toBeInTheDocument();
});
