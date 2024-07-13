import React from "react";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import Flashsale from "./components/Flashsale.jsx";
import Categories from "./components/Categories.jsx";
import SellingProduct from "./components/SellingProduct.jsx";
import Feature from "./components/Feature.jsx";
import Footer from "./components/Footer.jsx";
import Demos from "./components/Demos.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Flashsale />
      <Categories />
      <SellingProduct />
      <Demos />
      <Feature />

      {/* <Footer /> */}
    </>
  );
}

export default App;
