import Tabs from "components/Tabs";
import TabsContent from "components/Tabs/TabsContent";
import React, { useState } from "react";

const Categories = ({ categoryData }) => {
  const [isDefault, setIsDefault] = useState("hotel");

  const setTabName = (id) => {
    setIsDefault(id);
  };

  return (
    <section id="category" className="container-fluid">
      <div className="row container mx-auto text-align-left">
        <div className="col">
          <Tabs
            categoryData={categoryData}
            isDefault={isDefault}
            setTabName={setTabName}
          />

          <TabsContent categoryData={categoryData} isDefault={isDefault} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
