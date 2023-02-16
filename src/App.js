import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsContextProvider from "./Global/ProductsContext";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Router>
          <Navbar />
          <Banner />
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
        <Products />
      </ProductsContextProvider>
    </>
  );
}

export default App;
