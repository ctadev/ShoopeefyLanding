import React from "react";
import FeatureProducts from "../../components/featureProducts/FeatureProducts";
import GridLayout from "../../components/gridMenu/GridLayout";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureProducts />
      <GridLayout />
    </div>
  );
};

export default Home;
