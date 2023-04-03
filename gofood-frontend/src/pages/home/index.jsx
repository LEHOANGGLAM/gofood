import { useEffect } from "react";
import Loading from "../loading";
import Slider from "./Slider";
import Category from "./Category";
import FeaturedProduct from "./FeaturedProduct";
import Banner from "./Banner";
import LatestProduct from "./LatestProduct";
import Blog from "./Blog";
import TopStore from "./TopStore";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      {/* <Loading /> */}

      <Slider />
      {/* <Category /> */}
      <FeaturedProduct />

      <Banner />
      <TopStore />
      <LatestProduct />
      <Blog />
    </>
  );
};

export default Home;
