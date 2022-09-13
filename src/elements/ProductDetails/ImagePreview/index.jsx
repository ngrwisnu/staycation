import React from "react";

import "./_image-preview.scss";

const ImagePreview = ({ data }) => {
  return (
    <div className="container image-preview">
      <div className="container-grid sm">
        {data.imageUrls.map((item, index) => {
          return (
            <div
              key={item._id}
              className={`item ${index > 0 ? "col-5" : "col-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <div className="image-preview__card h-100">
                <figure className="image-preview__card-wrapper">
                  <img
                    src={item.url}
                    alt={item._id}
                    className="image-preview__img-cover"
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePreview;
