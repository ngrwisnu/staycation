// import Bootstrap
import "./assets/scss/style.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProductDetails from "pages/ProductDetails";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
