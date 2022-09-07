import React from "react";

import ".";

const InputGuest = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="input-guest ">
      <label htmlFor="inputGroupSelect01">Number of Guest(s)</label>
      <select
        className="form-select"
        id="inputGroupSelect01"
        onChange={changeHandler}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};

export default InputGuest;
