// import Bootstrap
import "./assets/scss/style.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProductDetail from "pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
