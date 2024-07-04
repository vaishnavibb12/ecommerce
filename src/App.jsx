import React from "react";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import Flashsale from "./components/Flashsale.jsx";
import Categories from "./components/Categories.jsx";
import SellingProduct from "./components/SellingProduct.jsx";
import Feature from "./components/Feature.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Flashsale />
      <Categories />
      <SellingProduct />
      <Feature />
    </>
  );
}

export default App;
