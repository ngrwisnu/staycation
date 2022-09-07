// import Bootstrap
import "./assets/scss/style.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProductDetails from "pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
