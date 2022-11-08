// import Bootstrap
import "./assets/scss/style.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProductDetails from "pages/ProductDetails";
import Checkout from "pages/Checkout";

// import product details json
import data from "./data/itemDetailsData.json";
import { useState } from "react";

function App() {
  // Set up product details data for each product
  // ! next useState will delete because the data will store to the redux
  const [bookData, setBookData] = useState({
    data: {
      duration: 1,
      date: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    },
  });

  // ! can be delete
  const bookDataHandler = (bookDuration) => {
    setBookData(bookDuration);
  };

  // console.log(bookData);
  // -------------------------------------------------

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/properties/:id"
            element={
              <ProductDetails
                bookDataHandler={bookDataHandler} // ! no need this props after the data store to the redux
                itemDetails={data}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout dataState={bookData} itemDetails={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
