import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "../src/index.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";

import Billing from "./pages/Billing.jsx";
import Data from "./pages/Data.jsx";
import Signup from "./pages/Signup.jsx";
import Product from "./pages/Product.jsx";
import OurStory from "./pages/OurStory.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/data" element={<Data />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/story" element={<OurStory />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
