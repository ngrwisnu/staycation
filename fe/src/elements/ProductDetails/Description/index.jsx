import React from "react";
import parse from "html-react-parser";

import "./_description-features.scss";

const Description = ({ data }) => {
  return (
    <div className="detail-description col-7">
      <div className="description">
        <div className="about-place">
          <h4>About the place</h4>
          {parse(`${data.description}`)}
        </div>

        <div className="feature-offers">
          <div className="row">
            <h4>This place offers</h4>
            <div className="col-6">
              <div className="row">
                {data.features.length === 0
                  ? "Tidak ada fitur"
                  : data.features.map((feature, index) => {
                      return (
                        <div
                          key={`feature-${index}`}
                          className="col-6 feature-offers__feature"
                        >
                          <img
                            src={feature.imageUrl}
                            alt={feature.name}
                            className="mb-2"
                          />
                          <span>{feature.name}</span>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
