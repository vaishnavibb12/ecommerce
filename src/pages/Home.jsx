import React from "react";
import Slider from "../components/Slider.jsx";
import Flashsale from "../components/Flashsale.jsx";
import Categories from "../components/Categories.jsx";
import SellingProduct from "../components/SellingProduct.jsx";
import Feature from "../components/Feature.jsx";
import Demos from "../components/Demos.jsx";

function Home() {
  return (
    <>
      <Slider />
      <Flashsale />
      <Categories />
      <SellingProduct />
      <Demos />
      <Feature />
    </>
  );
}

export default Home;
