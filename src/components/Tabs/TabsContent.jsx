import Card from "components/Card";
import React from "react";

const TabsContent = ({ categoryData, isDefault }) => {
  return (
    <div className="tab-content" id="pills-tabContent">
      {categoryData.map((item) => {
        return (
          <div
            className={`tab-pane fade ${
              isDefault === item._id && "show active"
            }`}
            key={item._id}
            id={`pills-${item._id}`}
            role="tabpanel"
            aria-labelledby={`pills-${item._id}-tab`}
            tabIndex="0"
          >
            <div className="row">
              {item.items.map((content) => {
                return (
                  <div className="col-3" key={content._id}>
                    <Card
                      image={content.imageUrl}
                      name={content.name}
                      price={content.price}
                      city={content.city}
                      unit={content.unit}
                      isPopular={content.isPopular}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TabsContent;
