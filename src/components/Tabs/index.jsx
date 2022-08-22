import React from "react";

const Tabs = ({ categoryData, isDefault, setTabName }) => {
  return (
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      {categoryData.map((item) => {
        return (
          <li className="nav-item" key={item._id}>
            <button
              className={`nav-link ${isDefault === item._id && "active"}`}
              id={`pills-${item._id}-tab`}
              data-bs-toggle="pills"
              data-bs-target={`#pills-${item._id}`}
              type="button"
              role="tab"
              arial-controls={`pills-${item._id}`}
              aria-selected="true"
              onClick={() => setTabName(item._id)}
            >
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
