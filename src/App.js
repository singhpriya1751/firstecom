import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Router>
        <Banner />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Products />
      </Router>
    </>
  );
}

export default App;
